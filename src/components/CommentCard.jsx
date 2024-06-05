import React from "react";
import { format } from "date-fns";

const CommentCard = ({ comment}) => {
  return (
    <div className="comment__card">
      <p>
        Comentario ralizado el:{" "}
        <strong>
          {format(new Date(comment.createdAt), "dd/MM/yyyy HH:mm")}
        </strong>
      </p>
      <p>
        Usuario: <strong>{comment.name}</strong>
      </p>
      <p>
        Mail: <strong>{comment.mail}</strong>
      </p>
      <p>
        Comentario: <strong>{comment.comment}</strong>
      </p>
    </div>
  );
};

export default CommentCard;
