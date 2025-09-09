import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface Transaction {
  id: string;
  customerId: string;
  service: string;
  amount: string;
  status: "Success" | "Pending" | "Failed";
  orderDate: string;
}

const mockTransactions: Transaction[] = [
  { id: "1", customerId: "CUS001", service: "Money Transfer", amount: "₹5,000", status: "Success", orderDate: "2024-01-15" },
  { id: "2", customerId: "CUS002", service: "Mobile Recharge", amount: "₹299", status: "Success", orderDate: "2024-01-15" },
  { id: "3", customerId: "CUS003", service: "Bill Payment", amount: "₹1,200", status: "Pending", orderDate: "2024-01-15" },
  { id: "4", customerId: "CUS004", service: "AePS", amount: "₹10,000", status: "Failed", orderDate: "2024-01-14" },
  { id: "5", customerId: "CUS005", service: "Cash Deposit", amount: "₹25,000", status: "Success", orderDate: "2024-01-14" },
  { id: "6", customerId: "CUS006", service: "Move to Bank", amount: "₹8,500", status: "Success", orderDate: "2024-01-14" },
  { id: "7", customerId: "CUS007", service: "Money Transfer", amount: "₹15,000", status: "Pending", orderDate: "2024-01-13" },
  { id: "8", customerId: "CUS008", service: "Mobile Recharge", amount: "₹199", status: "Success", orderDate: "2024-01-13" },
  { id: "9", customerId: "CUS009", service: "Bill Payment", amount: "₹2,500", status: "Failed", orderDate: "2024-01-13" },
  { id: "10", customerId: "CUS010", service: "AePS", amount: "₹7,500", status: "Success", orderDate: "2024-01-12" },
];

const ITEMS_PER_PAGE = 5;

export function TransactionsTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredTransactions = mockTransactions.filter(
    (t) =>
      t.customerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTransactions = filteredTransactions.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const getStatusBadge = (status: Transaction["status"]) => {
    const statusConfig = {
      Success: "bg-green-100 text-green-700 hover:bg-green-100",
      Pending: "bg-amber-100 text-amber-700 hover:bg-amber-100",
      Failed: "bg-red-100 text-red-700 hover:bg-red-100",
    };

    return (
      <Badge
        className={cn(
          "w-24 h-7 flex items-center justify-center text-xs rounded-full font-medium",
          statusConfig[status]
        )}
      >
        {status}
      </Badge>
    );
  };

  return (
    <Card className="finance-card">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-xl font-semibold">
            Recent Transactions
          </CardTitle>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by Customer ID or Service..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 bg-background"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted border-b border-border">
                <TableHead className="text-center p-4 font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                  Customer ID
                </TableHead>
                <TableHead className="text-center p-4 font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                  Service
                </TableHead>
                <TableHead className="text-center p-4 font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                  Amount
                </TableHead>
                <TableHead className="text-center p-4 font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                  Status
                </TableHead>
                <TableHead className="text-center p-4 font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                  Order Date
                </TableHead>
              </TableRow>
            </TableHeader>
           <TableBody className="divide-y divide-border">
  {currentTransactions.length > 0 ? (
    currentTransactions.map((t, index) => (
      <TableRow
        key={t.id}
        className={`hover:bg-muted/50 transition-colors ${
          index % 2 === 0 ? "bg-background" : "bg-muted/20"
        }`}
      >
        <TableCell className="p-4 text-center text-sm font-mono text-foreground">
          {t.customerId}
        </TableCell>
        <TableCell className="p-4 text-sm text-center text-foreground">
          {t.service}
        </TableCell>
        <TableCell className="p-4 text-sm text-center font-semibold text-foreground">
          {t.amount}
        </TableCell>
        <TableCell className="p-4 text-center">
          <div className="flex justify-center">{getStatusBadge(t.status)}</div>
        </TableCell>
        <TableCell className="p-4 text-sm text-center text-muted-foreground">
          {new Date(t.orderDate).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell
        colSpan={5}
        className="text-center py-8 text-muted-foreground"
      >
        No transactions found
      </TableCell>
    </TableRow>
  )}
</TableBody>

          </Table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    className={cn(currentPage === 1 && "pointer-events-none opacity-50")}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const shouldShow =
                    page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1;

                  if (!shouldShow) {
                    if (page === 2 && currentPage > 4)
                      return (
                        <PaginationItem key="ellipsis-start">
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    if (page === totalPages - 1 && currentPage < totalPages - 3)
                      return (
                        <PaginationItem key="ellipsis-end">
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    return null;
                  }

                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    className={cn(currentPage === totalPages && "pointer-events-none opacity-50")}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        <div className="mt-4 flex justify-between text-sm text-muted-foreground">
          <span>
            Showing {startIndex + 1} to {Math.min(endIndex, filteredTransactions.length)} of{" "}
            {filteredTransactions.length} transactions
          </span>
          <span>Page {currentPage} of {totalPages}</span>
        </div>
      </CardContent>
    </Card>
  );
}
