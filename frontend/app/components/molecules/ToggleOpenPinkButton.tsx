import { PinkButton } from "@/app/components/atoms"

export interface IToggleOpenPinkButton {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const ToggleOpenPinkButton = ({ isOpen, setIsOpen }: IToggleOpenPinkButton) => {
    return (
        <PinkButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Hide" : "Show"}
        </PinkButton>
    )
}