import React, { useEffect, useState } from 'react';
import { FaSpotify, FaApple, FaPodcast } from 'react-icons/fa';
import EpisodeCard from './EpisodeCard'; // ✅ Import here

const PodcastFeed = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLatest, setShowLatest] = useState(true);
  const [showOlder, setShowOlder] = useState(false);

  const rssFeedUrl = 'https://anchor.fm/s/1003bfc44/podcast/rss';
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeedUrl)}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setEpisodes(data.items);
        } else {
          setError('No episodes found.');
        }
      })
      .catch((err) => {
        setError(`Failed to fetch episodes: ${err.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const latest = episodes[0];
  const older = episodes.filter((_, idx) => idx !== 0);


  return (
    <div>
      {/* Latest Episode Section */}
      <section className="episode-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>🎧 Latest Episode</h2>
          <button className="tiny-button" onClick={() => setShowLatest(!showLatest)}>
            {showLatest ? 'Hide' : 'Show'}
          </button>
        </div>

        {loading && <p>Loading episodes...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!loading && !error && latest && showLatest && (
          <>
            <EpisodeCard episode={{
              title: `Ep. ${latest.itunes_episode || episodes.length} — ${latest.title}`,
              image: latest.thumbnail || latest.image || '',
              description: new Date(latest.pubDate).toDateString(),
              link: latest.link,
            }} />

            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '2rem' }}>
              <a href="https://open.spotify.com/show/0AhVRsQQ4vfCJf1V10bMLh" target="_blank" rel="noopener noreferrer" title="Spotify">
                <FaSpotify size={24} color="#7B2C3C" />
              </a>
              <a href="https://podcasts.apple.com/us/podcast/sanctified-and-chilled/id1724731191" target="_blank" rel="noopener noreferrer" title="Apple Podcasts">
                <FaApple size={24} color="#7B2C3C" />
              </a>
              <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8xMDAzYmZjNDQvY2FzdC9yc3M=" target="_blank" rel="noopener noreferrer" title="Google Podcasts">
                <FaPodcast size={24} color="#7B2C3C" />
              </a>
            </div>
          </>
        )}
      </section>

      {/* Older Episodes Section */}
      <section className="episode-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>📚 Older Episodes</h2>
          <button className="tiny-button" onClick={() => setShowOlder(!showOlder)}>
            {showOlder ? 'Hide' : 'Show'}
          </button>
        </div>

        {showOlder &&
          older.map((ep, index) => (
            <EpisodeCard
              key={index}
              episode={{
                title: `Ep. ${ep.itunes_episode || episodes.length - index - 1} — ${ep.title}`,
                image: ep.thumbnail || ep.image || '',
                description: new Date(ep.pubDate).toDateString(),
                link: ep.link,
              }}
            />
          ))}
      </section>
    </div>
  );
};

export default PodcastFeed;
