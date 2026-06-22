type DeleteButtonProps = {
  label: string;
  onDelete: () => void;
};

export default function DeleteButton({ label, onDelete }: DeleteButtonProps) {
  return <button onClick={onDelete}>{label}</button>;
}
