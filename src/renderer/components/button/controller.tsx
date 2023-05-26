import { Link } from 'react-router-dom';
import clickEffect from '../../../../assets/audios/click.wav';

export default function ControllerButtons({
  nextLink,
  prevLink,
}: {
  nextLink: string;
  prevLink: string;
}) {
  const soundeffect = new Audio(clickEffect);
  soundeffect.volume = 0.5;

  return (
    <div className="btns">
      <Link to={prevLink} onClick={() => soundeffect.play()}>
        <button className="prevBtn" type="button" />
      </Link>
      <Link to={nextLink} onClick={() => soundeffect.play()}>
        <button className="nextBtn" type="button" />
      </Link>
    </div>
  );
}
