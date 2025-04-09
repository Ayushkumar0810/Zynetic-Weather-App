import { AlertCircle } from 'lucide-react';

export default function ErrorMessage({ message }) {
    return (
        <div className="max-w-md mx-auto mt-6 flex items-center gap-3 bg-red-500/10 border border-red-400 text-red-700 px-4 py-3 rounded-xl shadow-sm">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-sm sm:text-base">{message}</p>
        </div>
    );
}
