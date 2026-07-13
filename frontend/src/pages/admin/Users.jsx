import React from 'react';
import { UserCheck, UserX, ShieldCheck, Mail } from 'lucide-react';

const AdminUsers = () => {
  const allUsers = [
    { id: 1, name: 'أميرة بدر', email: 'amira@example.com', role: 'admin', status: 'active' },
    { id: 2, name: 'محمود أحمد', email: 'mahmo@example.com', role: 'vendor', status: 'active' },
    { id: 3, name: 'مينا نبيل', email: 'mina@example.com', role: 'customer', status: 'active' },
    { id: 4, name: 'كريم خالد', email: 'karim@example.com', role: 'customer', status: 'banned' },
  ];

  const getRoleBadge = (role) => {
    if (role === 'admin') return <span className="px-2 py-0.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-md text-[10px]">مدير عام</span>;
    if (role === 'vendor') return <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-md text-[10px]">تاجر / شريك</span>;
    return <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md text-[10px]">عميل</span>;
  };

  return (
    <div className="space-y-6 select-none text-right">
      <div>
        <h1 className="text-xl md:text-2xl font-black text-white mb-1">إدارة المستخدمين 👥</h1>
        <p className="text-xs text-slate-400 font-semibold">التحكم في حسابات العملاء، التجار، وتعديل صلاحيات الإدارة.</p>
      </div>

      <div className="bg-[#140b32]/40 border border-purple-500/10 rounded-2xl p-5 md:p-6 backdrop-blur-md overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.02)]">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-slate-400">
                <th className="pb-3 font-bold pr-2">الاسم</th>
                <th className="pb-3 font-bold">البريد الإلكتروني</th>
                <th className="pb-3 font-bold">الصلاحية</th>
                <th className="pb-3 font-bold text-center">الحالة</th>
                <th className="pb-3 font-bold text-center">إجراءات السيطرة</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 font-semibold divide-y divide-white/5">
              {allUsers.map((user) => (
                <tr key={user.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 pr-2 text-white font-black">{user.name}</td>
                  <td className="py-4 text-slate-400 font-mono text-[11px]">{user.email}</td>
                  <td className="py-4">{getRoleBadge(user.role)}</td>
                  <td className="py-4 text-center">
                    {user.status === 'active' ? (
                      <span className="text-emerald-400 text-[11px]">نشط</span>
                    ) : (
                      <span className="text-rose-400 text-[11px]">محظور</span>
                    )}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg text-purple-400 transition-colors border-0 cursor-pointer" title="ترقية لصلاحية مدير">
                        <ShieldCheck size={14} />
                      </button>
                      {user.status === 'active' ? (
                        <button className="p-2 bg-rose-500/10 hover:bg-rose-500/20 rounded-lg text-rose-400 transition-colors border-0 cursor-pointer" title="حظر المستخدم">
                          <UserX size={14} />
                        </button>
                      ) : (
                        <button className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg text-emerald-400 transition-colors border-0 cursor-pointer" title="إلغاء الحظر">
                          <UserCheck size={14} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;