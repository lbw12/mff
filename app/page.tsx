'use client';

import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Wallet, 
  Network, 
  ShoppingCart, 
  Users, 
  CreditCard, 
  FileUp, 
  Search, 
  Calendar, 
  Bell, 
  Settings,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ArrowRight,
  ReceiptText,
  Landmark,
  CheckCircle2,
  Clock,
  XCircle,
  AlertCircle,
  Download,
  Filter,
  ExternalLink,
  RefreshCw,
  Info,
  MoreVertical,
  LogOut,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

// --- Types ---
type View = 'dashboard' | 'nodes' | 'subscriptions' | 'export';

// --- Components ---

const Sidebar = ({ activeView, setView }: { activeView: View, setView: (v: View) => void }) => {
  const navItems = [
    { id: 'dashboard', label: '总数据', icon: LayoutDashboard },
    { id: 'nodes', label: '节点中心', icon: Network },
    { id: 'subscriptions', label: '报单认购中心', icon: ShoppingCart },
    { id: 'export', label: '导出中心', icon: FileUp },
  ];

  return (
    <aside className="w-72 h-screen fixed left-0 top-0 bg-surface border-r border-black/5 flex flex-col py-8 px-6 z-50 overflow-y-auto">
      <div className="mb-12 px-2">
        <div className="text-xl font-bold tracking-tight text-on-surface mb-1">新纪元</div>
        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant/40 font-bold">New Era Admin</div>
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => ['dashboard', 'nodes', 'subscriptions', 'export'].includes(item.id) && setView(item.id as View)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-default transition-all duration-200 group ${
                isActive 
                  ? 'text-primary font-semibold bg-primary/5 shadow-sm' 
                  : 'text-on-surface-variant hover:bg-black/5'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-on-surface-variant/60 group-hover:text-on-surface-variant'}`} />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 space-y-4">
        <button className="w-full py-3 px-4 bg-primary text-white rounded-default font-semibold text-sm transition-transform active:scale-95 shadow-lg shadow-primary/20">
          Launch Portal
        </button>
        
        <div className="space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-2 text-on-surface-variant/60 hover:text-on-surface hover:bg-black/5 rounded-default transition-all">
            <HelpCircle className="w-4 h-4" />
            <span className="text-xs font-medium">Help Center</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-on-surface-variant/60 hover:text-on-surface hover:bg-black/5 rounded-default transition-all">
            <LogOut className="w-4 h-4" />
            <span className="text-xs font-medium">Logout</span>
          </button>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-black/5">
          <div className="w-10 h-10 rounded-full bg-surface-container-low overflow-hidden relative">
            <Image 
              src="https://picsum.photos/seed/admin/100/100" 
              alt="Admin" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="text-xs font-bold">Admin Manager</div>
            <div className="text-[10px] text-on-surface-variant/70">System Identity verified</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

const TopNav = ({ title }: { title: string }) => {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-18rem)] h-16 z-40 glass-header flex items-center justify-between px-8">
      <div className="flex items-center gap-6 flex-1 max-w-xl">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
          <input 
            type="text" 
            placeholder="搜索功能、订单或地址..." 
            className="w-full bg-black/5 border-none rounded-full py-1.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-black/5 transition-all">
          <Calendar className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-black/5 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
        </button>
        <div className="h-6 w-px bg-black/5 mx-2"></div>
        <div className="flex items-center gap-3 pl-2">
          <span className="text-sm font-medium text-on-surface">新纪元 New Era</span>
          <div className="w-8 h-8 rounded-full bg-surface-container-low overflow-hidden relative border border-black/5">
             <Image 
              src="https://picsum.photos/seed/profile/100/100" 
              alt="Profile" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

// --- View Components ---

const DashboardView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-10"
    >
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-on-surface">总数据</h1>
          <p className="text-on-surface-variant mt-1 text-sm font-medium">实时业务数据概览</p>
        </div>
        <div className="flex items-center bg-black/5 p-1 rounded-full border border-black/5">
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-all">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="px-4 py-1.5 bg-white rounded-full shadow-sm text-xs font-bold flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            2023年10月24日
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-all">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: '今日节点认购', value: '12,480.00', unit: 'USDT', change: '+12.4%', icon: Network },
          { label: '今日报单认购', value: '45,120.50', unit: 'USDT', change: '+8.2%', icon: ShoppingCart },
          { label: '新增用户', value: '142', unit: '位', change: '+24', icon: Users, isNeutral: true },
        ].map((kpi, i) => (
          <button key={i} className="apple-card group p-8 rounded-default text-left hover:border-primary/20">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                <kpi.icon className="w-5 h-5 fill-current" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-on-surface-variant/20 group-hover:text-primary transition-colors" />
            </div>
            <div className="text-on-surface-variant text-xs font-semibold mb-1 uppercase tracking-wider">{kpi.label}</div>
            <div className="text-3xl font-bold tracking-tight text-on-surface">
              {kpi.value} <span className="text-xs font-medium text-on-surface-variant/40">{kpi.unit}</span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`text-[11px] font-bold ${kpi.isNeutral ? 'text-on-surface' : 'text-primary'}`}>{kpi.change}</span>
              <span className="text-[11px] text-on-surface-variant/40">较昨日同时段</span>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="apple-card p-8 rounded-default">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-primary rounded-full"></div>
            <h3 className="text-xl font-bold tracking-tight">节点业绩汇总</h3>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '超级节点', count: 84, amount: '1,240,000' },
                { label: '联盟节点', count: 156, amount: '850,000' },
                { label: '社区节点', count: 320, amount: '480,000' },
                { label: '合伙人节点', count: 544, amount: '271,029' },
              ].map((node, i) => (
                <div key={i} className="p-5 bg-black/5 rounded-default">
                  <div className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest mb-1">{node.label}</div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold">{node.count} <span className="text-[10px] font-normal opacity-50">位</span></span>
                    <span className="text-sm font-semibold text-primary">{node.amount} USDT</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-black/5">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest mb-1">累计认购总额</div>
                  <div className="text-2xl font-bold">2,841,029.00 <span className="text-xs font-medium">USDT</span></div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest mb-1">总节点数</div>
                  <div className="text-2xl font-bold">1,104 <span className="text-xs font-medium">个</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="apple-card p-8 rounded-default flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-on-surface rounded-full"></div>
            <h3 className="text-xl font-bold tracking-tight">报单业绩汇总</h3>
          </div>
          <div className="flex-1 space-y-8">
            <div className="flex items-center justify-between p-6 bg-black/5 rounded-default">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <ReceiptText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-widest">今日报单数量</div>
                  <div className="text-2xl font-bold">856 <span className="text-xs font-normal opacity-40">份</span></div>
                </div>
              </div>
              <span className="text-xs font-bold text-primary">+15.2%</span>
            </div>
            <div className="flex items-center justify-between p-6 bg-black/5 rounded-default">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Landmark className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-widest">累计报单总额</div>
                  <div className="text-2xl font-bold">5,912,400 <span className="text-xs font-normal opacity-40">USDT</span></div>
                </div>
              </div>
              <span className="text-xs font-bold text-primary">+4.1%</span>
            </div>
          </div>
          <div className="pt-10">
            <button className="w-full py-3.5 bg-primary text-white rounded-default font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 group text-sm">
              查看报单详情
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const NodesView = () => {
  const nodes = [
    { type: '超级节点', total: 100, sold: 82, color: 'bg-primary', icon: 'diamond' },
    { type: '联盟节点', total: 500, sold: 495, color: 'bg-secondary', icon: 'hub', warning: '即将售罄' },
    { type: '社区节点', total: 2000, sold: 1240, color: 'bg-tertiary', icon: 'groups' },
    { type: '合伙人节点', total: 5000, sold: 5000, color: 'bg-on-surface', icon: 'handshake', error: '售罄 (Sold Out)' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">节点中心</h1>
        <p className="text-secondary text-sm">实时监控全网节点销售状态与订单详情</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {nodes.map((node, i) => (
          <div key={i} className="apple-card p-6 rounded-default shadow-sm hover:shadow-md group relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-primary/5 p-2 rounded-lg">
                <Network className="w-5 h-5 text-primary" />
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-bold bg-primary/10 text-primary uppercase tracking-wider">{node.type}</span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-on-surface-variant/40 text-xs font-medium uppercase tracking-tighter">总供应量</p>
                <p className="text-2xl font-bold text-on-surface">{node.total.toLocaleString()}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-black/5 pt-4">
                <div>
                  <p className="text-on-surface-variant/40 text-[10px] uppercase font-bold">已售</p>
                  <p className={`text-lg font-semibold ${node.sold === node.total ? 'text-on-surface' : 'text-primary'}`}>{node.sold.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-on-surface-variant/40 text-[10px] uppercase font-bold">剩余</p>
                  <p className="text-lg font-semibold text-on-surface-variant/40">{(node.total - node.sold).toLocaleString()}</p>
                </div>
              </div>
              <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                <div className={`${node.color} h-full transition-all duration-1000`} style={{ width: `${(node.sold / node.total) * 100}%` }}></div>
              </div>
              {node.warning && (
                <p className="text-[10px] text-tertiary font-bold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {node.warning}
                </p>
              )}
              {node.error && (
                <p className="text-[10px] text-error font-bold flex items-center gap-1">
                  <XCircle className="w-3 h-3" /> {node.error}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="apple-card rounded-default overflow-hidden">
        <div className="px-8 py-6 flex justify-between items-center border-b border-black/5">
          <h3 className="text-lg font-bold tracking-tight text-on-surface">节点订单明细</h3>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-on-surface-variant bg-black/5 rounded-full hover:bg-black/10 transition-colors">
              <Filter className="w-3.5 h-3.5" /> 筛选
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-on-surface-variant bg-black/5 rounded-full hover:bg-black/10 transition-colors">
              <Download className="w-3.5 h-3.5" /> 导出
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/5">
                <th className="px-8 py-4 text-[11px] font-bold text-on-surface-variant/50 uppercase tracking-wider">订单ID</th>
                <th className="px-8 py-4 text-[11px] font-bold text-on-surface-variant/50 uppercase tracking-wider">节点类型</th>
                <th className="px-8 py-4 text-[11px] font-bold text-on-surface-variant/50 uppercase tracking-wider">钱包地址</th>
                <th className="px-8 py-4 text-[11px] font-bold text-on-surface-variant/50 uppercase tracking-wider text-right">金额 (USDT)</th>
                <th className="px-8 py-4 text-[11px] font-bold text-on-surface-variant/50 uppercase tracking-wider">交易哈希</th>
                <th className="px-8 py-4 text-[11px] font-bold text-on-surface-variant/50 uppercase tracking-wider">订单时间</th>
                <th className="px-8 py-4 text-[11px] font-bold text-on-surface-variant/50 uppercase tracking-wider">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {[
                { id: '#TX-908212', type: '超级节点', address: '0x71C...4f90', amount: '5,000.00', hash: '0x3ab8...e82f', time: '2023-11-20 14:23:01', status: '已确认', statusColor: 'bg-primary/10 text-primary' },
                { id: '#TX-908199', type: '联盟节点', address: '0x2dA...11e2', amount: '1,200.00', hash: '0x992c...af11', time: '2023-11-20 13:55:42', status: '已确认', statusColor: 'bg-primary/10 text-primary' },
                { id: '#TX-908185', type: '社区节点', address: '0xFE2...c98a', amount: '300.00', hash: '0x1102...334b', time: '2023-11-20 11:12:09', status: '进行中', statusColor: 'bg-tertiary-fixed text-tertiary' },
                { id: '#TX-908154', type: '超级节点', address: '0x99A...df82', amount: '5,000.00', hash: '0x87d1...0092', time: '2023-11-19 22:45:33', status: '已取消', statusColor: 'bg-error-container text-on-error-container' },
                { id: '#TX-908112', type: '合伙人节点', address: '0x4b1...99bc', amount: '15,000.00', hash: '0x312e...66da', time: '2023-11-19 19:10:55', status: '已确认', statusColor: 'bg-primary/10 text-primary' },
              ].map((order, i) => (
                <tr key={i} className="hover:bg-black/5 transition-colors">
                  <td className="px-8 py-4"><span className="text-primary font-medium tracking-tighter">{order.id}</span></td>
                  <td className="px-8 py-4 text-sm font-semibold text-on-surface">{order.type}</td>
                  <td className="px-8 py-4 font-mono text-xs text-primary">{order.address}</td>
                  <td className="px-8 py-4 text-sm font-bold text-right tabular-nums">{order.amount}</td>
                  <td className="px-8 py-4 text-xs text-on-surface-variant/40 font-mono">{order.hash}</td>
                  <td className="px-8 py-4 text-xs text-on-surface-variant/60">{order.time}</td>
                  <td className="px-8 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-4 flex items-center justify-between bg-black/5">
          <p className="text-xs text-on-surface-variant/40">显示第 1-5 条，共 1,245 条记录</p>
          <div className="flex gap-1">
            <button className="p-2 rounded-lg hover:bg-black/5 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-black/5 text-xs font-medium transition-colors">2</button>
            <button className="w-8 h-8 rounded-lg hover:bg-black/5 text-xs font-medium transition-colors">3</button>
            <span className="w-8 h-8 flex items-center justify-center text-on-surface-variant/20">...</span>
            <button className="w-8 h-8 rounded-lg hover:bg-black/5 text-xs font-medium transition-colors">125</button>
            <button className="p-2 rounded-lg hover:bg-black/5 transition-colors"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const SubscriptionsView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-10"
    >
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">报单认购中心</h2>
          <p className="text-secondary font-medium">管理与监控全平台的认购流水及用户参与行为</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white shadow-sm border border-black/5 px-4 py-2 rounded-default text-sm font-semibold hover:scale-105 transition-transform">
            <Filter className="w-4 h-4" /> 筛选条件
          </button>
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-default text-sm font-bold shadow-lg hover:scale-105 transition-transform bg-gradient-to-br from-primary to-primary-container">
            <Download className="w-4 h-4" /> 导出报表
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="apple-card p-6 rounded-default relative overflow-hidden group">
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">New Users / 新增用户</p>
              <h3 className="text-4xl font-extrabold text-on-surface tracking-tighter">1,284</h3>
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 relative z-10">
            <span className="flex items-center text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              <ArrowUpRight className="w-3 h-3 mr-1" /> +12.4%
            </span>
            <span className="text-[10px] text-on-surface-variant/60">较上周对比</span>
          </div>
        </div>

        <div className="apple-card p-6 rounded-default relative overflow-hidden group">
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">High Value / 高净值</p>
              <h3 className="text-4xl font-extrabold text-on-surface tracking-tighter">412</h3>
            </div>
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <Landmark className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 relative z-10">
            <span className="text-[10px] text-on-surface-variant/60 font-medium">认购金额高于 50,000 USDT</span>
          </div>
        </div>
      </div>

      <div className="apple-card rounded-default overflow-hidden">
        <div className="px-8 py-6 border-b border-black/5 flex justify-between items-center">
          <h3 className="text-lg font-bold tracking-tight">全量认购明细</h3>
          <span className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold text-on-surface-variant/60 uppercase">Showing 50 of 12,402 Transactions</span>
        </div>
        <div className="overflow-x-auto hide-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/5">
                <th className="px-8 py-4 text-[11px] font-extrabold text-secondary tracking-widest uppercase">钱包地址</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-secondary tracking-widest uppercase text-right">认购金额</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-secondary tracking-widest uppercase">收款钱包</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-secondary tracking-widest uppercase">TXHASH</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-secondary tracking-widest uppercase">状态</th>
                <th className="px-8 py-4 text-[11px] font-extrabold text-secondary tracking-widest uppercase text-right">时间</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {[
                { address: '0x71C...a4E9', amount: '12,500.00', wallet: 'Main_Wallet_A1', hash: 'b72a...f91c', status: '已确认', statusColor: 'bg-primary/10 text-primary', time: '2024-05-24 14:22:15' },
                { address: '0x33B...f2D1', amount: '5,000.00', wallet: 'Reserve_Pool_B', hash: '88c2...12a4', status: '处理中', statusColor: 'bg-tertiary-fixed text-tertiary', time: '2024-05-24 13:45:02' },
                { address: '0x99A...c311', amount: '100,000.00', wallet: 'VIP_Node_01', hash: 'e221...99bc', status: '已入账', statusColor: 'bg-primary text-white', time: '2024-05-24 12:10:33', isHigh: true },
                { address: '0x14D...e882', amount: '2,500.00', wallet: 'Main_Wallet_A1', hash: 'a119...d002', status: '已确认', statusColor: 'bg-primary/10 text-primary', time: '2024-05-24 11:55:41' },
                { address: '0xDD2...b51e', amount: '15,000.00', wallet: '-', hash: 'N/A', status: '交易失败', statusColor: 'bg-error-container text-on-error-container', time: '2024-05-24 11:20:18', isError: true },
              ].map((row, i) => (
                <tr key={i} className={`hover:bg-black/5 transition-colors ${row.isHigh ? 'bg-primary/5' : row.isError ? 'bg-error/5' : ''}`}>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <Wallet className="w-4 h-4 text-on-surface-variant/40" />
                      <span className="font-mono text-xs font-medium">{row.address}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-sm font-bold ${row.isHigh ? 'text-primary' : row.isError ? 'text-error' : ''}`}>{row.amount}</span>
                    <span className="text-[10px] font-bold text-secondary ml-1">USDT</span>
                  </td>
                  <td className="px-6 py-4"><span className="text-xs font-medium px-2 py-1 bg-black/5 rounded">{row.wallet}</span></td>
                  <td className="px-6 py-4">
                    <a className="text-primary hover:underline font-mono text-[11px] flex items-center gap-1" href="#">
                      {row.hash} <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 w-fit ${row.statusColor}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <div className="text-[11px] font-bold">{row.time.split(' ')[0]}</div>
                    <div className="text-[10px] opacity-50">{row.time.split(' ')[1]}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-6 bg-black/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><ChevronLeft className="w-4 h-4" /></button>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm">1</button>
              <button className="w-10 h-10 rounded-full hover:bg-white font-medium text-sm transition-colors">2</button>
              <button className="w-10 h-10 rounded-full hover:bg-white font-medium text-sm transition-colors">3</button>
              <span className="px-2 text-on-surface-variant/40">...</span>
              <button className="w-10 h-10 rounded-full hover:bg-white font-medium text-sm transition-colors">248</button>
            </div>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><ChevronRight className="w-4 h-4" /></button>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-[11px] font-bold text-secondary uppercase">跳转至</label>
            <input className="w-12 h-10 bg-white border border-black/5 rounded-lg text-center text-sm font-bold" type="text" defaultValue="1" />
            <button className="h-10 px-4 bg-black/10 rounded-lg text-xs font-bold hover:bg-black/20 transition-colors">Go</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExportView = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <div>
        <nav className="flex items-center gap-2 text-xs font-medium text-on-surface-variant/40 mb-3">
          <span>系统管理</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary">导出中心</span>
        </nav>
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">导出中心</h2>
            <p className="text-on-surface-variant/50 mt-2 max-w-xl text-sm leading-relaxed">
              选择需要生成的报表模版。系统支持 CSV, XLSX 和 PDF 格式导出，大规模数据处理将在后台异步完成。
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 rounded-full bg-black/5 text-on-surface text-sm font-semibold hover:opacity-80 transition-all flex items-center gap-2">
              <Filter className="w-4 h-4" /> 筛选记录
            </button>
            <button className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all flex items-center gap-2">
              <RefreshCw className="w-4 h-4" /> 刷新状态
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 apple-card rounded-default p-8 group relative overflow-hidden flex flex-col justify-between min-h-[320px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div>
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
              <Network className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-2">节点订单全量导出</h3>
            <p className="text-on-surface-variant/50 text-sm max-w-md leading-relaxed">
              包含全球所有节点的活跃状态、到期时间、收益分布及各层级关联。适用于季度审核与分红结算。
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <button className="px-8 py-3 bg-primary text-white text-sm font-bold rounded-xl flex items-center gap-3">
              开始生成 <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-on-surface-variant/30 flex items-center gap-1">
              <Info className="w-3.5 h-3.5" /> 平均生成耗时：45秒
            </span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-default p-8 flex flex-col justify-between hover:bg-black/5 transition-colors cursor-pointer border border-transparent hover:border-black/5">
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary mb-6">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded-full">核心</span>
            </div>
            <h4 className="text-xl font-bold text-on-surface mb-2">报单认购明细</h4>
            <p className="text-on-surface-variant/50 text-sm leading-relaxed">
              所有待审及已支付的认购订单。
            </p>
          </div>
          <div className="pt-4 border-t border-black/5 flex items-center justify-between">
            <span className="text-xs text-on-surface-variant/40">15个字段</span>
            <Download className="w-4 h-4 text-on-surface-variant/20" />
          </div>
        </div>
      </div>

      <section className="apple-card rounded-default p-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-on-surface tracking-tight">导出历史</h3>
            <p className="text-on-surface-variant/40 text-sm mt-1">仅保留最近30天内的导出记录</p>
          </div>
          <div className="flex bg-black/5 rounded-lg p-1">
            <button className="px-4 py-1.5 text-xs font-bold bg-white shadow-sm rounded-md">全部</button>
            <button className="px-4 py-1.5 text-xs font-medium text-on-surface-variant/40">已完成</button>
            <button className="px-4 py-1.5 text-xs font-medium text-on-surface-variant/40">处理中</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs font-bold text-on-surface-variant/40 uppercase tracking-wider">
                <th className="pb-6 px-4">文件名</th>
                <th className="pb-6 px-4">导出类型</th>
                <th className="pb-6 px-4">生成时间</th>
                <th className="pb-6 px-4">文件大小</th>
                <th className="pb-6 px-4">状态</th>
                <th className="pb-6 px-4 text-right">操作</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { name: 'node_orders_full_20231120.xlsx', type: '节点订单', time: '2023-11-20 14:32', size: '12.4 MB', status: '已就绪', statusColor: 'text-primary' },
                { name: 'subscription_details_may.csv', type: '报单明细', time: '2023-11-19 09:15', size: '4.1 MB', status: '已就绪', statusColor: 'text-primary' },
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-black/5 transition-colors border-t border-black/5">
                  <td className="py-5 px-4 font-bold text-on-surface">{row.name}</td>
                  <td className="py-5 px-4 text-on-surface-variant/60">{row.type}</td>
                  <td className="py-5 px-4 text-on-surface-variant/60 font-mono">{row.time}</td>
                  <td className="py-5 px-4 text-on-surface-variant/60">{row.size}</td>
                  <td className="py-5 px-4">
                    <span className={`flex items-center gap-2 font-bold text-xs ${row.statusColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${row.statusColor.replace('text-', 'bg-')} ${row.isPending ? 'animate-pulse' : ''}`}></span>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-5 px-4 text-right">
                    <button className="p-2 hover:bg-white rounded-lg transition-all">
                      {row.isError ? <RefreshCw className="w-5 h-5 text-on-surface-variant/40" /> : <Download className="w-5 h-5 text-primary" />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </motion.div>
  );
};

// --- Main Page ---

export default function AdminDashboard() {
  const [view, setView] = useState<View>('dashboard');

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar activeView={view} setView={setView} />
      
      <main className="ml-72 min-h-screen">
        <TopNav title={view.charAt(0).toUpperCase() + view.slice(1)} />
        
        <div className="pt-24 pb-16 px-12">
          <AnimatePresence mode="wait">
            {view === 'dashboard' && <DashboardView key="dashboard" />}
            {view === 'nodes' && <NodesView key="nodes" />}
            {view === 'subscriptions' && <SubscriptionsView key="subscriptions" />}
            {view === 'export' && <ExportView key="export" />}
          </AnimatePresence>
        </div>
      </main>

      {/* Toast Notification */}
      {view === 'export' && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 bg-on-surface text-surface py-4 px-6 rounded-xl shadow-2xl z-50 flex items-center gap-4 border border-white/10 backdrop-blur-md"
        >
          <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin"></div>
          <div>
            <p className="text-sm font-bold">报表正在云端生成中...</p>
            <p className="text-[11px] opacity-60">完成后将通过系统通知告知您</p>
          </div>
          <button className="ml-4 opacity-40 hover:opacity-100">
            <XCircle className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </div>
  );
}
