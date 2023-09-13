import { Badge, ListGroup } from "react-bootstrap";
import { TypeH2 } from "react-bootstrap-icons";

const CommentArea = (props) => {
  return (
    <ListGroup as="ol">
      {props.comments && props.comments.lenght > 0 ? (
        props.comments.map((c) => {
          return (
            <>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start bg-dark">
                <div className="ms-2 me-3">
                  <div className="fw-bold text-white">Comment</div>
                </div>
                <p className="text-white me-auto">{c.comment}</p>
                <Badge pill>{c.rate}</Badge>
              </ListGroup.Item>
            </>
          );
        })
      ) : (
        <h2 className="text-white">Non ci sono ancora commenti per questo film!</h2>
      )}
    </ListGroup>
  );
};

export default CommentArea;
