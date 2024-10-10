import { Link } from '@inertiajs/react';

const Navigation: React.FC = () => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/add-partai">Tambah Partai</Link>
            <Link href="/partai-list">Daftar Partai</Link>
        </nav>
    );
};

export default Navigation;
