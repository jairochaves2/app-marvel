export interface AddressContextType {
  address: string;
  setAddress: (newAddress: string) => void;
  openDialogAddress: boolean;
  toggleOpenDialogAddress: () => void;
}
