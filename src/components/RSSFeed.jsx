// src/components/RSSFeed.jsx
import React, { useEffect, useState } from "react";

const RSSFeed = () => {
  const [latest, setLatest] = useState(null);
  const [older, setOlder] = useState([]);
  const [showOlder, setShowOlder] = useState(false);

  const RSS_URL = "https://anchor.fm/s/1003bfc44/podcast/rss";
  const CORS_PROXY = "https://api.allorigins.win/get?url=";

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const res = await fetch(`${CORS_PROXY}${encodeURIComponent(RSS_URL)}`);
        const data = await res.json();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");

        const items = Array.from(xml.querySelectorAll("item")).map(item => ({
          title: item.querySelector("title")?.textContent,
          link: item.querySelector("link")?.textContent,
          description: item.querySelector("description")?.textContent,
          pubDate: item.querySelector("pubDate")?.textContent,
        }));

        setLatest(items[0]);
        setOlder(items.slice(1, 5));
      } catch (err) {
        console.error("Failed to fetch RSS feed:", err);
      }
    };

    fetchRSS();
  }, []);

  return (
    <div className="episode-section">
      <h2>Latest Episode</h2>
      {latest ? (
        <div className="episode-card">
          <h3>{latest.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: latest.description }} />
          <a href={latest.link} className="custom-button" target="_blank" rel="noopener noreferrer">
            Listen Now
          </a>
        </div>
      ) : (
        <p>Loading episode...</p>
      )}

      <button className="custom-button" onClick={() => setShowOlder(!showOlder)}>
        {showOlder ? "Hide Older Episodes" : "Show Older Episodes"}
      </button>

      {showOlder && (
        <div className="older-episodes">
          {older.map((ep, i) => (
            <div key={i} className="episode-card">
              <h4>{ep.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: ep.description }} />
              <a href={ep.link} className="custom-button" target="_blank" rel="noopener noreferrer">
                Listen
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RSSFeed;
