import Link from "next/link";
import MovieCard from "../components/moviecard";
import styles from "@/app/styles/common.module.css";
import { resolve } from "styled-jsx/css";

const Movie = async () => {
  const url = process.env.RAPID_API;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "659bb3dfb5mshd507d7b7cfd2b17p1e21fejsn7423466f9138",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const mainData = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series And Movies</h1>
          <div className={styles.card_section}>
          {mainData.map((curElem) => {
            return <MovieCard key={curElem.id} {...curElem} />;
          })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Movie;
