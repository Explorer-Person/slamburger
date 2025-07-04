import { Pencil, Trash2 } from "lucide-react";

const categories = [
    { id: 1, name: "Burgers", status: "Visible" },
    { id: 2, name: "Sandwiches", status: "Visible" },
    { id: 3, name: "Sides", status: "Visible" },
    { id: 4, name: "Drinks", status: "Visible" },
];


export default function CategoryPage() {
    return (
        <section>
            <div className="min-h-screen px-6 py-10 sm:px-20 font-[var(--font-geist-sans)] bg-white text-black">
                <header className="mb-10">
                    <h1 className="text-4xl lg:text-7xl [font-family:Anton,sans-serif]">CATEGORY MANAGEMENT</h1>
                    <button className="mt-4 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded">
                        + ADD CATEGORY
                    </button>
                </header>

                <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200 text-base">
                        <thead className="bg-gray-50 text-left font-semibold text-gray-800 text-lg">
                            <tr>
                                <th className="px-6 py-5">Name</th>
                                <th className="px-6 py-5">Visibility</th>
                                <th className="px-6 py-5">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {categories.map((cat, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-5 font-bold text-lg">{cat.name}</td>
                                    <td className="px-6 py-5">
                                        <span className="bg-green-100 text-green-800 px-4 py-1.5 rounded-md font-semibold text-base">
                                            {cat.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <Pencil className="w-6 h-6 cursor-pointer hover:text-blue-500" />
                                            <Trash2 className="w-6 h-6 cursor-pointer hover:text-red-500" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}
