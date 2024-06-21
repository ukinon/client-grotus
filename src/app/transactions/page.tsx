import BottomBar from "@/components/layout/BottomBar";
import Navbar from "@/components/layout/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NextAuth from "@auth-kit/next/NextAuth";
import UnpaidTransactions from "./UnpaidTransactions";
import PaidTransactions from "./PaidTransactions";

export default function TransactionPage() {
  return (
    <NextAuth fallbackPath="/login">
      <main className="flex  flex-col items-center justify-start relative">
        <Navbar withSearch searchPlaceholder="Cari transaksi..." />

        <Tabs
          defaultValue="unpaid"
          className="w-screen flex flex-col items-end"
        >
          <TabsList className="bg-white fixed top-[0] mt-[8dvh] w-screen">
            <TabsTrigger value="unpaid">Belum bayar</TabsTrigger>
            <TabsTrigger value="paid">Sudah bayar</TabsTrigger>
          </TabsList>
          <TabsContent value="unpaid" className="w-screen">
            <UnpaidTransactions />
          </TabsContent>
          <TabsContent value="paid" className="w-screen">
            <PaidTransactions />
          </TabsContent>
        </Tabs>
        <BottomBar />
      </main>
    </NextAuth>
  );
}
