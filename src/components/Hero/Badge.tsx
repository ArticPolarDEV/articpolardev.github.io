import { Sparkles } from "lucide-react"

export default function Badge() {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-purple-50 dark:bg-white/[0.03] border border-purple-200 dark:border-white/5 text-purple-700 dark:text-purple-300 backdrop-blur-md transition-colors duration-500">
            <Sparkles size={12} className="text-purple-600 dark:text-purple-400" />
            <span>Available for new projects</span>
        </div>
    );
}