// resources/js/Pages/PartaiList.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Head } from '@inertiajs/react';

interface Partai {
    id: number;
    nama: string;
    image: string;
}

const PartaiList: React.FC = () => {
    const [partai, setPartai] = useState<Partai[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchPartai = async () => {
            try {
                const response = await axios.get('/api/partai'); // Mengambil data dari API
                setPartai(response.data.partai.data); // Pastikan ini sesuai dengan struktur respons API Anda
            } catch (error) {
                setError('Terjadi kesalahan saat memuat data partai.');
            } finally {
                setLoading(false);
            }
        };

        fetchPartai();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="container">
            <Head title="Daftar Partai" />
            <h1>Daftar Partai</h1>
            <ul>
                {partai.map((item) => (
                    <li key={item.id} className="partai-item">
                        <h2>{item.nama}</h2>
                        {item.image && <img src={item.image} alt={item.nama} className="partai-image" />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PartaiList;
