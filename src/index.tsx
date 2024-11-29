import { Icon } from '@iconify/react';
import React from 'react';

interface VSCodeIconProps {
  ext: string;
  fileName: string;
  className: string;
}

const icons: any = {
    "js": { name: "vscode-icons:file-type-js", color: null },
    "ts": { name: "vscode-icons:file-type-typescript", color: null },
    "jsx": { name: "vscode-icons:file-type-reactjs", color: null },
    "tsx": { name: "vscode-icons:file-type-reactts", color: null },
    "css": { name: "vscode-icons:file-type-css", color: null },
    "scss": { name: "vscode-icons:file-type-scss", color: null },
    "less": { name: "vscode-icons:file-type-less", color: null },
    "html": { name: "vscode-icons:file-type-html", color: null },
    "xml": { name: "vscode-icons:file-type-xml", color: null },
    "json": { name: "vscode-icons:file-type-json", color: null },
    "yaml": { name: "vscode-icons:file-type-yaml", color: null },
    "yml": { name: "vscode-icons:file-type-yaml", color: null },
    "py": { name: "vscode-icons:file-type-python", color: null },
    "java": { name: "vscode-icons:file-type-java", color: null },
    "kt": { name: "vscode-icons:file-type-kotlin", color: null },
    "kts": { name: "vscode-icons:file-type-kotlin", color: null },
    "cpp": { name: "vscode-icons:file-type-cpp2", color: null },
    "c": { name: "vscode-icons:file-type-c2", color: null },
    "h": { name: "vscode-icons:file-type-cheader", color: null },
    "hpp": { name: "vscode-icons:file-type-cppheader", color: null },
    "php": { name: "vscode-icons:file-type-php3", color: null },
    "rb": { name: "vscode-icons:file-type-ruby", color: null },
    "go": { name: "vscode-icons:file-type-go", color: null },
    "swift": { name: "vscode-icons:file-type-swift", color: null },
    "sh": { name: "vscode-icons:file-type-shell", color: null },
    "bash": { name: "vscode-icons:file-type-shell", color: null },
    "zsh": { name: "vscode-icons:file-type-shell", color: null },
    "md": { name: "vscode-icons:file-type-markdown", color: null },
    "txt": { name: "vscode-icons:file-type-text", color: null },
    "log": { name: "vscode-icons:file-type-log", color: null },
    "vue": { name: "vscode-icons:file-type-vue", color: null },
    "svelte": { name: "vscode-icons:file-type-svelte", color: null },
    "dart": { name: "vscode-icons:file-type-dartlang", color: null },
    "cs": { name: "vscode-icons:file-type-csharp", color: null },
    "rs": { name: "vscode-icons:file-type-rust", color: null },
    "pl": { name: "vscode-icons:file-type-perl", color: null },
    "lua": { name: "vscode-icons:file-type-lua", color: null },
    "sql": { name: "vscode-icons:file-type-sql", color: null },
    "bat": { name: "vscode-icons:file-type-batch", color: null },
    "dockerfile": { name: "vscode-icons:file-type-docker", color: null },
    "env": { name: "vscode-icons:file-type-light-ini", color: null },
    "gitignore": { name: "vscode-icons:file-type-git", color: null },
    "tf": { name: "vscode-icons:file-type-terraform", color: null },
    "tfvars": { name: "vscode-icons:file-type-terraform", color: null },
    "pug": { name: "vscode-icons:file-type-pug", color: null },
    "styl": { name: "vscode-icons:file-type-stylus", color: null },
    "scss.map": { name: "vscode-icons:file-type-scss", color: null },
    "lock.json": { name: "vscode-icons:file-type-json", color: null },
    "cxx": { name: "vscode-icons:file-type-cpp2", color: null },
    "hh": { name: "vscode-icons:file-type-cheader", color: null },
    "gemspec": { name: "vscode-icons:file-type-ruby", color: null },
    "json5": { name: "vscode-icons:file-type-json", color: null },
    "svg": { name: "vscode-icons:file-type-svg", color: null },
    "webp": { name: "vscode-icons:file-type-image", color: null },
    "mp4": { name: "vscode-icons:file-type-video", color: null },
    "wav": { name: "vscode-icons:file-type-audio", color: null },
    "exe": { name: "bi:filetype-exe", color: null },
    "7z": { name: "vscode-icons:file-type-zip", color: null },
    "default": { name: "vscode-icons:default-file", color: null }
};

/**
 * Renders a VSCode-style file icon based on the file extension or file name.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.ext - The file extension (e.g., ".js", ".txt"). Optional if `fileName` is provided.
 * @param {string} props.fileName - The full file name (e.g., "example.js"). Optional if `ext` is provided.
 * @param {string} props.className - Additional CSS classes for styling the icon.
 * @returns {JSX.Element | null} - A JSX element representing the icon, or `null` if no valid extension is found.
 */
export class VSCodeIcon extends React.Component<VSCodeIconProps> {
    getExtension(): string {
      const { ext, fileName } = this.props;
  
      // Use `ext` if provided
      if (ext) {
        return ext.startsWith('.') ? ext.slice(1) : ext; // Remove leading dot
      }
  
      // Extract extension from `fileName`
      if (fileName) {
        const parts = fileName.split('.');
        return parts.length > 1 ? parts.pop()! : ''; // Get last part
      }
  
      return ''; // No extension found
    }
  
    render() {
      const { className } = this.props;
  
      // Get the extension and map it to an icon
      const ext = this.getExtension();
      const icon = icons[ext] || icons["default"];
  
      if (!icon) {
        return null; // No valid icon to render
      }
  
      return <Icon icon={icon.name} className={className} />;
    }
  }