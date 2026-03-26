const BASE = "https://raw.githubusercontent.com/255ribeiro/intro_topografia/main/";

async function downloadZipFolder(fileListPath, zipName = "download.zip", btnId = "dl-btn", statusId = "dl-status") {
    const btn    = document.getElementById(btnId);
    const status = document.getElementById(statusId);

    btn.disabled = true;
    status.textContent = " Reading file list...";

    try {
        // fetch and parse the txt file
        const res   = await fetch(BASE + fileListPath);
        const text  = await res.text();
        const FILES = text
            .split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0);  // ignore empty lines

        status.textContent = ` Fetching ${FILES.length} files...`;

        const zip = new JSZip();

        for (const path of FILES) {
            const response = await fetch(BASE + path);
            if (!response.ok) {
                status.textContent = ` Error fetching ${path.split("/").pop()}`;
                btn.disabled = false;
                return;
            }
            const blob = await response.blob();
            zip.file(path.split("/").pop(), blob);
        }

        const content = await zip.generateAsync({ type: "blob" });
        const url     = URL.createObjectURL(content);
        const a       = document.createElement("a");
        a.href        = url;
        a.download    = zipName;
        a.click();
        URL.revokeObjectURL(url);

        status.textContent = " Done!";

    } catch (e) {
        status.textContent = " Error: " + e.message;
    }

    btn.disabled = false;
}
