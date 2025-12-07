import type { Account } from "@/types/types.tsx";
import { accounts as mockData } from "@/api/mockData.ts";
import { useState } from "react";

type MockFetchResponse = { accounts: Account[] };

export function useAccountsListMock() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  async function fetchAccounts() {
    const promise = new Promise<MockFetchResponse>((resolve) => {
      setTimeout(() => resolve({ accounts: [...mockData] }), 500);
    });
    const { accounts } = await promise;
    setAccounts(accounts);
  }

  return { accounts, fetchAccounts };
}
