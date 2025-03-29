import { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

export const CustomModal = ({
  children,
  isOpen,
  onClose,
  title,
  onSubmit,
  submitButtonText,
  submitButtonClass,
  submitButtonProps,
  footer,
  contentContainerClass,
  isLoading,
  loader,
  needX,
  isSubmitting,
}: {
  children: ReactNode;

  isOpen: boolean;
  onClose: () => void;
  title: string;
  onSubmit: () => void;
  submitButtonText?: string;
  submitButtonClass?: string;
  submitButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  footer?: ReactNode;
  contentContainerClass?: string;
  isLoading?: boolean;
  loader?: ReactNode;
  needX?: boolean;
  isSubmitting?: boolean;
}) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent
        className={`max-w-5xl overflow-hidden ${contentContainerClass} scrollbar-hide p-0`}
      >
        <AlertDialogHeader className="bg-primary text-white p-5">
          <div className="flex gap-3 justify-between items-center px-2">
            <AlertDialogTitle className="">{title}</AlertDialogTitle>
            <p>
              {needX && (
                <div
                  className="hover:bg-white/10 cursor-pointer rounded-sm p-1 duration-150"
                  onClick={onClose}
                >
                  <X size={20} />
                </div>
              )}
            </p>
          </div>
        </AlertDialogHeader>

        <AlertDialogDescription className="px-0">
          <div className="max-h-[400px] overflow-y-auto no-scrollbar px-2">
            {isLoading
              ? loader ?? <div className="animate-pulse">Loading...</div>
              : children}
          </div>
        </AlertDialogDescription>
        <AlertDialogFooter className="px-5">
          {footer ?? (
            <>
              <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
              <AlertDialogAction
                disabled={!!isSubmitting}
                className={`${submitButtonClass}`}
                onClick={onSubmit}
                {...submitButtonProps}
              >
                {submitButtonText ?? "Submit"}
              </AlertDialogAction>
            </>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
