import React, { useEffect, useState } from "react";
import Contents from "../layout/Contents";
import YoutubeSearch from "../youtube/YoutubeSearch";
import YoutubeTag from "../youtube/YoutubeTag";
import YoutubeCont from "../youtube/YoutubeCont";
import ContTitle from "../layout/ContTitle";

const YoutubePage = () => {
  const [youtubes, setYoutubes] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=AIzaSyATwAOpBF6MOvpTvcQ_OsoymSzf0WLmv6U`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=webstoryboy&type=video&key=AIzaSyATwAOpBF6MOvpTvcQ_OsoymSzf0WLmv6U"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Contents>
      <ContTitle title="youtube" />
      <YoutubeSearch onSearch={search} />
      <YoutubeTag onSearch={search} />
      <YoutubeCont youtubes={youtubes} />
    </Contents>
  );
};

export default YoutubePage;
