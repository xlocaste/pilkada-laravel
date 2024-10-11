import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    TableHeader,
} from "@/Components/ui/table";

type Partai = {
    id: number;
    nama: string;
    image: string;
};

export default function List({
    partai, // Ubah ini untuk menerima data partai
}: {
    partai: Partai[]; // Tipe data untuk partai
}) {
    return (
        <AuthenticatedLayout>
            <Head title="Partai" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="pt-6 text-[#545454] flex justify-between items-center">
                                <h1 className="text-2xl font-extrabold">Partai</h1>
                                <Link
                                    href="/partai/tambah" // Ganti dengan URL yang sesuai
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Tambah Partai
                                </Link>
                            </div>
                            <p>Daftar Partai</p>
                            <div className="w-[calc(100vw-52px)] xl:w-full">
                                <div className="mt-6 text-nowrap bg-white p-4 shadow sm:rounded-lg sm:p-8">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>#</TableHead>
                                                <TableHead>Nama</TableHead>
                                                <TableHead>Image</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {partai.length === 0 && (
                                                <TableRow>
                                                    <TableCell
                                                        colSpan={3}
                                                        className="text-center"
                                                    >
                                                        Data belum tersedia
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                            {partai.map((partai, index) => (
                                                <TableRow key={partai.id}>
                                                    <TableCell>{index + 1}</TableCell>
                                                    <TableCell>{partai.nama}</TableCell>
                                                    <TableCell>
                                                        <img
                                                            src={`/storage/${partai.image}`}
                                                            alt={partai.nama}
                                                            className="w-16 h-16"
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
