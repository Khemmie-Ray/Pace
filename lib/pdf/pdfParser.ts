import * as pdfjsLib from 'pdfjs-dist';

if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
  ).toString();
}

interface ParsedContent {
  fullText: string;
  words: string[];
  chapters: Chapter[];
  metadata: {
    totalPages: number;
    totalWords: number;
    estimatedReadingTime: number; 
    fileName: string;
  };
}

interface Chapter {
  title: string;
  content: string;
  wordCount: number;
  startIndex: number; 
  endIndex: number;
}

export async function parsePDF(file: File): Promise<ParsedContent> {
  try { 
    const arrayBuffer = await file.arrayBuffer();
    
    const loadingTask = pdfjsLib.getDocument({ 
      data: arrayBuffer,
      verbosity: 0,
    });
    
    const pdf = await loadingTask.promise;
    const totalPages = pdf.numPages;
    
    // Extract text from all pages
    let fullText = '';
    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      
      const pageText = textContent.items
        .map((item: any) => item.str)
        .join(' ');
      
      fullText += pageText + '\n\n';
    }
    
    const cleanedText = cleanText(fullText);
    const chapters = detectChapters(cleanedText);
    
    const words = cleanedText
      .split(/\s+/)
      .filter(word => word.length > 0);
    
    const totalWords = words.length;
    const estimatedReadingTime = Math.ceil(totalWords / 200); 
    
    return {
      fullText: cleanedText,
      words,
      chapters,
      metadata: {
        totalPages,
        totalWords,
        estimatedReadingTime,
        fileName: file.name,
      },
    };
    
  } catch (error) {
    console.error('PDF parsing error:', error);
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid PDF')) {
        throw new Error('This PDF file appears to be corrupted or invalid.');
      }
      if (error.message.includes('password')) {
        throw new Error('This PDF is password-protected. Please use an unprotected PDF.');
      }
      throw new Error(`PDF Error: ${error.message}`);
    }
    
    throw new Error('Failed to parse PDF. Please ensure it\'s a valid PDF file.');
  }
}

function cleanText(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .replace(/\bPage\s+\d+\b/gi, '')
    .replace(/^\d+\s*$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function detectChapters(text: string): Chapter[] {
  const words = text.split(/\s+/).filter(w => w.length > 0);
  
  return [{
    title: 'Full Book',
    content: text,
    wordCount: words.length,
    startIndex: 0,
    endIndex: words.length,
  }];
}