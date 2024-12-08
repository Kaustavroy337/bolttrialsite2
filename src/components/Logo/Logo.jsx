import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="text-2xl font-display font-bold">
      <span className="font-black">Next</span>View
    </Link>
  );
}