// resources/js/Pages/Partai/tambah.tsx

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Tambah() {
    const { data, setData, post, processing, errors } = useForm<{
        nama: string;
        image: File | null; // Ubah di sini
    }>({
        nama: "",
        image: null,
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setData("image", event.target.files[0]);
        }
    };

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault();

        // Kirim data ke route /partai/tambah
        post("/partai/tambah", {
            data: {
                nama: data.nama,
                image: data.image,
            },
            onSuccess: () => {
                window.location.href = "/partai"; // Redirect setelah berhasil
            },
            onError: (errors) => {
                console.error("Error:", errors); // Tangani error jika ada
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Tambah Partai" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="pt-6 text-[#545454]">
                                <h1 className="text-2xl font-extrabold">Tambah Partai</h1>
                                <p>Masukkan detail partai baru</p>
                            </div>
                            <form onSubmit={submitForm} className="mt-6" encType="multipart/form-data">
                                <div className="mb-4">
                                    <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        id="nama"
                                        value={data.nama}
                                        onChange={(e) => setData("nama", e.target.value)}
                                        className={`mt-1 block w-full border ${
                                            errors.nama ? "border-red-500" : "border-gray-300"
                                        } rounded-md p-2`}
                                        required
                                    />
                                    {errors.nama && (
                                        <p className="text-red-500 text-xs italic">{errors.nama}</p>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                        Gambar
                                    </label>
                                    <input
                                        type="file"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className={`mt-1 block w-full border ${
                                            errors.image ? "border-red-500" : "border-gray-300"
                                        } rounded-md p-2`}
                                        required
                                    />
                                    {errors.image && (
                                        <p className="text-red-500 text-xs italic">{errors.image}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    {processing ? "Menyimpan..." : "Simpan Partai"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
