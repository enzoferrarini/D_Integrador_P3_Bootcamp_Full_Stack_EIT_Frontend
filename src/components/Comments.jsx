import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard.jsx";

const Comments = ({ commentsList }) => {
  return (
    <>
      {" "}
      <div className="titulo__card">Historial de Comentarios</div>;
      {commentsList.map((com) => (
        <CommentCard key={com._id} comment={com} />
      ))}
    </>
  );
};

export default Comments;
