"use client";

import { useState, useEffect } from "react";
import { MessageSquare, Send, Trash2, Clock } from "lucide-react";
import { Comment } from "@/lib/types";
import { commentService } from "@/lib/services/commentService";
import { useProfile } from "../ProfileProvider";

interface CommentSectionProps {
  targetId: string;
  charName: string;
}

export default function CommentSection({ targetId, charName }: CommentSectionProps) {
  const { profile, requireAuth } = useProfile();
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const loadComments = async () => {
    const list = await commentService.getComments(targetId);
    setComments(list);
  };

  useEffect(() => {
    loadComments();
  }, [targetId]);

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    // Check auth
    const authed = requireAuth();
    if (!authed || !profile) return;

    setLoading(true);
    setMessage(null);

    const res = await commentService.addComment({
      targetId,
      userId: profile.id,
      username: profile.username,
      avatar: profile.avatar,
      text: text.trim(),
    });

    setLoading(false);
    if (res.success && res.comment) {
      setText("");
      setMessage({ text: "Komentar terkirim!", isError: false });
      setComments((prev) => [res.comment!, ...prev]);
    } else {
      setMessage({ text: res.message || "Gagal mengirim komentar.", isError: true });
    }
  };

  const handleDelete = async (id: string) => {
    if (!profile) return;
    const ok = await commentService.deleteComment(id, profile.id);
    if (ok) {
      setComments((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="space-y-4 pt-4 border-t border-white/10">
      <div className="flex items-center gap-2 text-sm font-bold text-gray-200">
        <MessageSquare className="w-4 h-4 text-blue-400" />
        <span>Komentar Komunitas ({comments.length})</span>
      </div>

      {/* Input Form */}
      <form onSubmit={handleAddComment} className="space-y-2">
        <div className="relative">
          <textarea
            rows={2}
            maxLength={300}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={
              profile
                ? `Tulis pendapat tentang ${charName}...`
                : "Klik untuk membuat profil & mulai berkomentar..."
            }
            onFocus={() => {
              if (!profile) requireAuth();
            }}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
          />
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">{text.length}/300</span>
          <button
            type="submit"
            disabled={loading || !text.trim()}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md disabled:opacity-40 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Kirim</span>
          </button>
        </div>

        {message && (
          <p
            className={`text-xs ${
              message.isError ? "text-rose-400" : "text-emerald-400"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>

      {/* Comment List */}
      <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
        {comments.length > 0 ? (
          comments.map((c) => {
            const isMine = profile && profile.id === c.userId;
            const dateStr = new Date(c.createdAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            });
            return (
              <div
                key={c.id}
                className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{c.avatar}</span>
                    <span className="text-xs font-bold text-gray-200">
                      {c.username}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {dateStr}
                    </span>
                    {isMine && (
                      <button
                        onClick={() => handleDelete(c.id)}
                        className="text-gray-400 hover:text-red-400 p-0.5"
                        title="Hapus komentar"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed break-words">
                  {c.text}
                </p>
              </div>
            );
          })
        ) : (
          <p className="text-xs text-gray-500 text-center py-4">
            Belum ada komentar untuk {charName}. Jadilah yang pertama berkomentar!
          </p>
        )}
      </div>
    </div>
  );
}
