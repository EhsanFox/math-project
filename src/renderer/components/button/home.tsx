import { Link } from 'react-router-dom';
import clickEffect from '../../../../assets/audios/click.wav';

export default function HomeButton({
  onClickFunc,
}: {
  onClickFunc?: Function;
}) {
  const soundeffect = new Audio(clickEffect);
  soundeffect.volume = 0.5;

  return (
    <div
      className="homeBtnParent"
      onClick={() => {
        soundeffect.play();
        if (onClickFunc) onClickFunc();
      }}
    >
      <Link className="homeBtn" to="/" />
    </div>
  );
}
