import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TvShowsSection = () => {
  const [showsData, setShowsData] = useState({});
  const [expandedAccordions, setExpandedAccordions] = useState({});
  const [loading, setLoading] = useState(true);

  // Random words for search
  const searchWords = ['car', 'space', 'dragon', 'robot'];

  const fetchShowsForWord = async (word) => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${word}`);
      const data = await response.json();
      return data.slice(0, 3); // Get only first 3 shows
    } catch (error) {
      console.error(`Error fetching shows for ${word}:`, error);
      return [];
    }
  };

  useEffect(() => {
    const fetchAllShows = async () => {
      setLoading(true);
      const results = {};
      for (const word of searchWords) {
        results[word] = await fetchShowsForWord(word);
      }
      setShowsData(results);
      setLoading(false);
    };
  
    fetchAllShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleAccordion = (word) => {
    setExpandedAccordions(prev => ({
      ...prev,
      [word]: !prev[word]
    }));
  };

  // Clean HTML tags from summary
  const cleanSummary = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl text-[#2B7B8C] font-semibold mb-8">
          SECTION II [20 points]
        </h2>
        <div className="text-center">Loading TV shows...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl text-[#2B7B8C] font-semibold mb-8">
        SECTION II [20 points]
      </h2>

      {searchWords.map((word) => (
        <div key={word} className="mb-4">
          <button
            onClick={() => toggleAccordion(word)}
            className="w-full p-4 bg-gray-50 rounded-lg flex justify-between items-center"
          >
            <span className="text-gray-700 capitalize">{word} TV Shows</span>
            {expandedAccordions[word] ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>

          {expandedAccordions[word] && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {showsData[word]?.map((show, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {show.show.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Type: {show.show.type || 'N/A'}
                    </p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {cleanSummary(show.show.summary) || 'No summary available'}
                    </p>
                    <div className="mt-auto">
                      <p className="text-gray-500 text-sm">
                        Rating: {show.show.rating?.average || 'N/A'}
                      </p>
                    </div>
                  </div>
                  <a
                    href={show.show.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 text-white text-center block
                      ${index === 0 ? 'bg-[#4A779E]' : 
                        index === 1 ? 'bg-[#2B7B8C]' : 
                        'bg-[#8B6F6F]'} 
                      hover:opacity-90 transition-opacity`}
                  >
                    Click
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TvShowsSection;