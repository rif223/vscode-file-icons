import React from 'react';
interface VSCodeIconProps {
    ext: string;
    fileName: string;
    className: string;
}
/**
 * Renders a VSCode-style file icon based on the file extension or file name.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.ext - The file extension (e.g., ".js", ".txt"). Optional if `fileName` is provided.
 * @param {string} props.fileName - The full file name (e.g., "example.js"). Optional if `ext` is provided.
 * @param {string} props.className - Additional CSS classes for styling the icon.
 * @returns {JSX.Element | null} - A JSX element representing the icon, or `null` if no valid extension is found.
 */
export declare class VSCodeIcon extends React.Component<VSCodeIconProps> {
    getExtension(): string;
    render(): React.JSX.Element | null;
}
export {};
