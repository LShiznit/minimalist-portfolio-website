import "./BtnPrimary.css"
import downArrows from "../assets/icons/down-arrows.svg"
import { HashLink } from "react-router-hash-link"

export default function BtnPrimary({
  innerText,
  hashLocation,
  onSub,
  disableImg,
}) {
  return (
    <>
      <HashLink to={hashLocation}>
        <button onClick={onSub} className="btn-primary">
          {disableImg === false && (
            <div className="btn-arrows" id="btn-arrows">
              <img src={downArrows} alt="btn-arrows" />
            </div>
          )}
          <div>{innerText}</div>
        </button>
      </HashLink>
    </>
  )
}
