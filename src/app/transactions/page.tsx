import BottomBar from "@/components/layout/BottomBar";
import Navbar from "@/components/layout/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NextAuth from "@auth-kit/next/NextAuth";
import UnpaidTransactions from "./UnpaidTransactions";
import CompleteTransaction from "./CompleteTransactions";
import ShippedTransactions from "./ShippedTransactions";

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
            <TabsTrigger value="unpaid" className="w-1/3">
              Pending
            </TabsTrigger>
            <TabsTrigger value="sent" className="w-1/3">
              Dikirim
            </TabsTrigger>
            <TabsTrigger value="complete" className="w-1/3">
              Selesai
            </TabsTrigger>
          </TabsList>
          <TabsContent value="unpaid" className="w-screen flex justify-center">
            <UnpaidTransactions />
          </TabsContent>
          <TabsContent value="sent" className="w-screen flex justify-center">
            <ShippedTransactions />
          </TabsContent>
          <TabsContent
            value="complete"
            className="w-screen flex justify-center"
          >
            <CompleteTransaction />
          </TabsContent>
        </Tabs>
        <BottomBar />
      </main>
    </NextAuth>
  );
}
