"use client"

import React from 'react';
import { Upload } from 'lucide-react';
import { useReading } from '@/contexts/ReadingContext';

const SetGoal = () => {
  const {
    wordGoal,
    setWordGoal,
    wpm,
    setWpm,
    fileName,
    setFileName,
    words,
    loadDummyData,
    startReading,
    hasStarted,
    setWords,
  } = useReading();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Please upload a PDF file only');
        e.target.value = '';
        return;
      }
      setFileName(file.name);
      loadDummyData();
    }
  };

  if (hasStarted) return null;

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/10">
      <h2 className="text-2xl font-bold font-montserrat mb-6 bg-linear-to-br from-purple-400 to-white bg-clip-text text-transparent">
        Set Goals
      </h2>

      <div className="mb-6">
        <p className="mb-3 font-semibold">Upload File</p>
        
        <label className="block">
          <div className="border-2 border-dashed border-white/20 hover:border-purple-400 transition-colors p-8 rounded-lg cursor-pointer bg-white/5 hover:bg-white/10">
            <div className="flex flex-col items-center justify-center gap-3">
              <Upload className="w-12 h-12 text-purple-400" />
              <p className="text-center">
                {fileName || 'Click to upload PDF file'}
              </p>
              <p className="text-sm text-gray-400">PDF files only</p>
            </div>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        </label>

        <button
          onClick={loadDummyData}
          className="mt-3 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-sm w-full"
        >
          Use Sample Data (for testing)
        </button>
      </div>

      {words.length > 0 && (
        <div className="p-4 rounded-lg mb-6 border border-white/20 bg-white/5">
          <p className="text-sm text-gray-300 mb-2">Preview (first 50 words):</p>
          <p className="text-sm leading-relaxed">
            {words.slice(0, 50).join(' ')}...
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Total words: {words.length}
          </p>
        </div>
      )}

      <div className="flex justify-between  mb-6">
        <div className="w-full lg:w-[48%] md:w-[48%]">
          <p className="mb-2 font-semibold">Goal (words):</p>
          <input
            type="number"
            placeholder="e.g., 500"
            value={wordGoal}
            onChange={(e) => setWordGoal(e.target.value)}
            className="p-3 border outline-0 border-white/20 rounded-lg w-full bg-white/5 focus:border-purple-400 transition-colors"
          />
        </div>
        <div className="w-full lg:w-[48%] md:w-[48%]">
          <p className="mb-2 font-semibold">Words per minute:</p>
          <input
            type="number"
            placeholder="e.g., 200"
            value={wpm}
            onChange={(e) => setWpm(e.target.value)}
            className="p-3 border outline-0 border-white/20 rounded-lg w-full bg-white/5 focus:border-purple-400 transition-colors"
          />
        </div>
      </div>

      {wordGoal && wpm && (
        <p className="text-sm text-gray-300 mb-4">
          Estimated time: {Math.ceil(parseInt(wordGoal) / parseInt(wpm))} minutes
        </p>
      )}

      <button
        onClick={startReading}
        className="w-full py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all transform hover:scale-105"
      >
        Start Reading Session
      </button>
    </div>
  );
};

export default SetGoal;