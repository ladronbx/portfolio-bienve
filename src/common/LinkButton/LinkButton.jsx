import './LinkButton.css'
import { useNavigate } from 'react-router-dom';

export const LinkButton = ({ path, title, classButton, emit }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);

    if (emit) {
      emit();
    }
  };

  return (
    <div className={classButton} onClick={handleClick}>
      {title}
    </div>
  );
};