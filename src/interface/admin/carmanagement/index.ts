export type FormAddCarValues = {
  organizationId: string;
  branchId: string;
  categoryId: string;
  name: string;
  pricePerDay: number;
  description?: string | undefined;
  thumbnail?: string | undefined;
  status: string;
  isActive: boolean;
  transmission: string;
  capacity: number;
  storage: number;
};
