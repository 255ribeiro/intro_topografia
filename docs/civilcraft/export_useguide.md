# QGIS → CivilCraft: Layer Transfer Guide

## Overview

CivilCraft (open-source, Apache-2.0) supports the following **import** formats:

| Format | What it carries |
|--------|----------------|
| **LandXML** | Surfaces (TIN), points, breaklines, alignments, pipe networks |
| **IFC 4.3** | Alignments and surfaces |
| **CSV point files** | Survey points (N, E, Z, description) |
| **PLY** | Point clouds / meshes |

The primary interchange path from QGIS is **LandXML**.

---

## Step-by-Step Workflow

### 1. Prepare layers in QGIS

- Ensure your project CRS is a **projected coordinate system** (e.g. UTM, EPSG:327xx).
- For **terrain**: you need either:
  - A **mesh layer** (`.2dm`) built from contours/points, **or**
  - A **raster DEM** (GeoTIFF, etc.)
- For **breaklines / feature lines**: vector line layers with Z values.
- For **points**: vector point layers with Z or an elevation attribute.
- For **alignments**: vector line layers (to be exported as LandXML alignments if supported).

### 2. Create a TIN mesh (if starting from contours)

1. **Processing Toolbox → Mesh → TIN Mesh Creation**
2. Input: your contour line layer
3. If contours are 2D: select the elevation attribute in *Value on vertex*
4. If contours are 3D: check *Use Z-coordinate for value on vertex*
5. Output: save as `.2dm`

### 3. Export to LandXML

#### Plugin comparison

**LandXML to Mesh** (Lutra Consulting, ID 3211)

| | |
|---|---|
| **Pros** | Bidirectional (mesh ↔ LandXML); from Lutra Consulting (experienced QGIS dev); round-trip tested (CRS + geometry preserved); handles CRS from `ogcWktCode`; QGIS 4 support via merged PR (Aug 2026) |
| **Cons** | Requires an intermediate `.2dm` mesh layer (extra step); last published release is v0.2.0 (Dec 2023) — QGIS 4 fix may not be in the repo yet; no built-in QC/validation; only exports surfaces (points + faces), no breaklines or alignments; produces very large files for dense meshes; no control over triangulation (uses the mesh as-is) |

**LandXML Surface Tools** (txttxtx, ID 6337)

| | |
|---|---|
| **Pros** | No intermediate mesh — raster → LandXML directly; includes a **QC validation** algorithm (degenerate triangles, nodata leakage, unit mix-ups, vertical bias, RMS); control over cell size, extent, linear units, elevation shift; actively maintained (v1.0.2, Sep 2026); Qt6-compatible; produces an HTML QC report + worst-residuals point layer |
| **Cons** | Requires a raster DEM as input (not vector contours directly); output has no CRS or vertical datum (must be pre-projected); only handles surfaces (no breaklines, alignments, pipe networks); uses regular grid triangulation (2 triangles/cell) — less efficient than an irregular TIN for smooth terrain; newer and less battle-tested in the field |

**LandXML Road & Terrain GIS Tools** (EdmondAkello)

| | |
|---|---|
| **Pros** | Very feature-rich for *import* (LandXML → QGIS): TIN to GeoTIFF, alignments, profiles, cross-sections, earthworks volumes, hidden-face handling; handles clothoid spirals accurately; parses 75 MB files in <0.4 s; tested against QGIS 3.44 |
| **Cons** | **Import-only** — cannot export to LandXML; not useful for the QGIS → CivilCraft direction; primarily designed for Civil 3D / OpenRoads file review |

**LandXml import plugin** (LINZ, ID 357)

| | |
|---|---|
| **Pros** | Imports parcels, nodes, observations from LINZ Landonline LandXML; lightweight |
| **Cons** | **Import-only**; designed specifically for New Zealand cadastral data; will not work with LandXML from other sources; not relevant for export |

**LandXML2QGIS** (ID 1794)

| | |
|---|---|
| **Pros** | Imports Victorian (Australia) cadastral LandXML into QGIS layers |
| **Cons** | **Import-only**; limited to a specific regional format; not relevant for export |

> **For your use case (QGIS → CivilCraft), the two relevant export plugins are:**
> - **LandXML to Mesh** (mesh → LandXML) — best when you already have a `.2dm`
> - **LandXML Surface Tools** (raster → LandXML) — best when you have a DEM and want QC

---

#### Option A: From a Mesh layer (TIN)

**Plugin:** `LandXML to Mesh`

1. Install from **Plugins → Manage and Install Plugins** (search "LandXML to Mesh")
2. **Processing Toolbox → LandXML → Convert Meshes to LandXML surfaces**
3. Input: your `.2dm` mesh layer
4. Output: save as `.xml`
5. The file contains a `<Surface>` with `<Points>` and `<Faces>`

#### Option B: From a Raster DEM

**Plugin:** `LandXML Surface Tools`

1. Install from **Plugins → Manage and Install Plugins** (search "LandXML Surface Tools")
2. **Processing Toolbox → LandXML Surface Tools → Raster DEM to LandXML surface**
3. Input: your raster (GeoTIFF, etc.)
4. Set: cell size, extent, linear units (meters), optional elevation shift
5. Output: save as `.xml`
6. Run **Check LandXML surface (QC)** to validate before importing
7. No intermediate mesh needed — the raster grid is triangulated directly

#### Option C: From individual point/line layers

**Manual / scripting approach:**

- Export points as CSV (`Point, Northing, Easting, Z, Description`) → import directly into CivilCraft via **CSV point file import**
- For breaklines: write a small Python script to generate the `<Breakline>` XML elements (no plugin currently exports breaklines to LandXML from QGIS)

### 4. Import into CivilCraft

1. Open CivilCraft (browser at [getcadcraft.com/use/civilcraft](https://getcadcraft.com/use/civilcraft) or desktop app)
2. **File → Import → LandXML** (or the equivalent import button)
3. Select your `.xml` file
4. The surface (and any breaklines/points) appear in the project
5. For CSV: **File → Import → CSV points**

### 5. Verify

- Check that the surface extent and elevations match your source data
- Verify coordinate system alignment (LandXML does **not** auto-transform CRS)
- If the surface appears displaced, the CRS of your QGIS project likely doesn't match what CivilCraft expects

---

## QGIS Plugins for LandXML (Summary Table)

| Plugin | ID | Direction | Source → LandXML | Notes |
|--------|----|-----------|------------------|-------|
| **LandXML to Mesh** | 3211 | Both | Mesh `.2dm` → `.xml` | Lutra Consulting. Round-trip tested. No QC. |
| **LandXML Surface Tools** | 6337 | Export only | Raster DEM → `.xml` | txttxtx. Includes QC tool. Actively maintained. |
| **LandXML Road & Terrain GIS Tools** | — | Import only | `.xml` → QGIS layers | EdmondAkello. Rich import (TIN, alignments, profiles, volumes). |
| **LandXml import plugin** | 357 | Import only | `.xml` → QGIS layers | LINZ. NZ cadastral data only.  |
| **LandXML2QGIS** | 1794 | Import only | `.xml` → QGIS layers | Victorian cadastral data. |

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Surface appears in wrong location | CRS mismatch. Ensure QGIS project CRS matches what CivilCraft expects. LandXML has no CRS transform. |
| Very large file (>20 MB) | Reduce mesh resolution or raster cell size before export. LandXML is ASCII/XML — inherently verbose. |
| CivilCraft doesn't show the surface | Check that the `.xml` has a valid `<Surface>` element with `<Points>` and `<Faces>`. Use the QC tool in LandXML Surface Tools to validate. |
| Breaklines missing | No QGIS plugin currently exports breaklines to LandXML. Write a Python script or add them manually in CivilCraft after import. |
| Elevation offset | LandXML stores no vertical datum. Ensure your DEM is on the correct height system (e.g. ellipsoidal vs. orthometric). |
| CivilCraft version too old | Use the latest (0.8.1+). Check [GitHub](https://github.com/getcadcraft/civilcraft) for updates. |

---

## File Structure After Import in CivilCraft

CivilCraft saves projects as:
- `project.ifc` — IFC 4.3 model (readable by other BIM tools)
- `project.civilcraft.json` — design rules & metadata 

Both are kept in the same folder.   