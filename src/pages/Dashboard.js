import { Fragment, useEffect } from "react";
import ShowList from "../components/dashboard/ShowList";
import StatsBox from "../components/dashboard/StatsBox";
import Activity from "../components/dashboard/Activity";
import "./Pages.css";
import { useSelector, useDispatch } from "react-redux";
import { supabase } from "../app/supabaseClient";
import useGraphql from "../hooks/useGraphql";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { setShowInfo } from "../app/showSlice";

const Dashboard = (props) => {
  const [myshows, setMyshows] = useState([]);
  let progresslist = {};
  const dispatch = useDispatch();
  let [allanime, setAllAnime] = useState();
  let [allmanga, setAllManga] = useState();

  const displayShows = (shows) => {
    const allshows = shows.Page.media;
    allshows.map((show) => {
      show.progress = progresslist["key" + show.id].progress;
    });
    setAllAnime(
      allshows.filter((show) => {
        return show.type === "ANIME";
      })
    );
    setAllManga(
      allshows.filter((show) => {
        return show.type === "MANGA";
      })
    );

    setMyshows((oldshows) => allshows);
  };

  const isLoggedIn = useSelector((state) => state.auth.access_token);
  const user_email = useSelector((state) => state.auth.email);
  const queryConstructor = useGraphql();
  const [error, loading, getShows] = useFetch(displayShows);

  useEffect(() => {
    function getShowInfo(arr_of_shows) {
      const query = queryConstructor({ id_in: `[${arr_of_shows}]` });
      getShows("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          query: query
        })
      });
    }

    async function getUserShows() {
      const { data, error } = await supabase
        .from("User Media Connection")
        .select()
        .eq("user", user_email);
      if (data && !error) {
        let arr_shows = data.map((connection) => connection.anilist_id);
        getShowInfo(arr_shows);
        data.forEach((userinfo) => {
          progresslist["key" + userinfo.anilist_id] = {
            anilist_id: userinfo.anilist_id,
            progress: userinfo.progress
          };
        });
        dispatch(
          setShowInfo({
            showinfo: progresslist
          })
        );
      }
    }

    if (isLoggedIn) {
      getUserShows();
    }
  }, [isLoggedIn]);

  return (
    <div className="dashboard">
      <ShowList shows={myshows} />
      <div className="info">
        <StatsBox anime={allanime} manga={allmanga} />
        <Activity />
      </div>
    </div>
  );
};
export default Dashboard;
