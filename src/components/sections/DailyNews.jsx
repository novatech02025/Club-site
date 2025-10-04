import React, { useEffect, useState } from "react";
import axios from "axios";

const Templates = () => {
  const [techNews, setTechNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              category: "technology",
              language: "en",
              pageSize: 7,
              apiKey: "53c87555d98c4a68a716530766f430aa",
            },
          }
        );

        const newsData = response.data.articles.map((article) => ({
          title: article.title,
          description: article.description,
          image: article.urlToImage || "https://placehold.co/600x400/1E293B/93C5FD",
          date: new Date(article.publishedAt).toDateString(),
          category: article.source.name,
        }));

        setTechNews(newsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tech news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section
      id="templates"
      className="min-h-screen py-20 px-4 bg-slate-800/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* --- Tech News Section --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-300 mb-4">Tech News & Updates</h2>
          <p className="text-slate-300">Stay informed with the latest happenings in the tech world.</p>
        </div>

        {loading ? (
          <p className="text-center text-slate-400 mb-20">Loading news...</p>
        ) : techNews.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {techNews.map((news, index) => (
              <div
                key={index}
                className="bg-slate-700/50 rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-indigo-400 font-semibold">
                    {news.category} • {news.date}
                  </p>
                  <h3 className="text-xl font-bold text-slate-100 mt-2 mb-3">{news.title}</h3>
                  <p className="text-slate-400 text-sm">{news.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400 mb-20">No tech news available.</p>
        )}
      </div>
    </section>
  );
};

export default Templates;
