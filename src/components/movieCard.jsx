import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div key={movie.id} className="w-40  overflow-hidden relative">
      <Link to={`/movies/${movie._id}`}>
        <div className="overflow-hidden rounded-xl">
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="w-full h-50 object-cover"
          />
        </div>
        <div className="pt-2">
          <h3 className="text-lg font-semibold">{movie.title}</h3>
        </div>
      </Link>
    </div>
  );
}
