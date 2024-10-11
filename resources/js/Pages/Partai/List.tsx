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
                        <div className="pt-6 text-[#545454]">
                                <h1 className="text-2xl font-extrabold">Partai</h1>
                                <p>Daftar Partai</p>
                            </div>
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
                                            {partai.map((item, index) => (
                                                <TableRow key={item.id}>
                                                    <TableCell>{index + 1}</TableCell>
                                                    <TableCell>{item.nama}</TableCell>
                                                    <TableCell>
                                                        <img
                                                            src={item.image.trim()}
                                                            alt={item.nama}
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
