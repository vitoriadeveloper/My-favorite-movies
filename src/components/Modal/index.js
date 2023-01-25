import "./styles.css";
import btn_close from "../../assets/close.svg";
export default function Modal({ currentImage, description, setHidden }) {
  return (
    <div className="modal">
      <div className="container-modal">
        <img
          src={btn_close}
          onClick={() => setHidden(true)}
          className="btn-close"
        />

        <img className="modal-movie" src={currentImage} alt="Imagem do filme" />
        <p>{description}</p>
      </div>
    </div>
  );
}
