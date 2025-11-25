# Deployment

This project is published at: https://euluna.github.io/HouseplantAssistant/

## Notes on functionality and external APIs

- Add to Tasks: The "Add to my tasks" feature is intentionally disabled for general users. The Google Tasks API requires OAuth verification and has limitations on free-tier usage; maintaining production access would require paid verification and additional ongoing costs which we did not pursue. The button in the UI remains visible but disabled; hovering it displays an explanation. If you need this feature enabled for a small number of accounts for testing, contact the maintainer (see contact information below).

- Plant data source: This project uses the Perenuals plant API (https://perenual.com/docs/api) to fetch species data. The API was updated at somepoint, and this project was modified on November 2025 accordingly to use the current endpoints and response structure.

- Paid entries: Most common species are available under the free API plan, but some species are only accessible on Perenuals' paid tier. In the UI, species that require a paid plan are marked and will show a placeholder and a message indicating they are paid access only.

- Example queries for testing: Lily, Mint, Sage, Grass, Poppy — these are known to return many valid results and are good candidates for quick verification.

## Project origin

This project was initially implemented as a group assignment for CMPT 276 (Software Engineering) at Simon Fraser University in Fall of 2024.

## Contact

For questions about testing access or small-scale account approvals, contact Euluna at ega@sfu.ca
