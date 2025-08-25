uname -r ---  5.10.198-g232b494617d8
cat /proc/version  ----- inux version 5.10.198-g232b494617d8 (hw@hw-Default-string) (aarch64-none-linux-gnu-gcc (GNU Toolchain for the A-profile Architecture 10.3-2021.07 (arm-10.29)) 10.3.1 20210621, GNU ld (GNU Toolchain for the A-profile Architecture 10.3-2021.07 (arm-10.29)) 2.36.1.20210621) #63 SMP Wed Aug 13 14:55:28 CST 2025

sudo apt-get update
sudo apt-get install -y build-essential bc flex bison libssl-dev libelf-dev dwarves pkg-config git


wget https://download.nomachine.com/download/8.12/Linux/nomachine_8.12.3_1_arm64.deb
sudo apt install ./nomachine_*.deb





____ ----- 


cd ~
git clone <firefly-kernel-repo-url> rk356x-kernel-5.10
cd rk356x-kernel-5.10
# Example (replace with the exact commit/branch that matches your uname -r)
git checkout 232b494617d8


cd ~/rk356x-kernel-5.10
cp /boot/config-$(uname -r) .config
yes "" | make olddefconfig



# It should print: CONFIG_LOCALVERSION="-g232b494617d8"
grep CONFIG_LOCALVERSION .config || true



./scripts/config --set-str CONFIG_LOCALVERSION "-g232b494617d8"
yes "" | make olddefconfig

./scripts/config --module CONFIG_TUN
yes "" | make olddefconfig


# If your kernel was built with clang, add LLVM=1 to the following make commands.
make modules_prepare


zcat /proc/config.gz 2>/dev/null | grep CONFIG_MODVERSIONS || grep CONFIG_MODVERSIONS /boot/config-$(uname -r)



# GCC build
make -j"$(nproc)" M=drivers/net modules
# If clang was used for the kernel:
# make -j"$(nproc)" LLVM=1 M=drivers/net modules




sudo mkdir -p /lib/modules/$(uname -r)/kernel/drivers/net
sudo cp drivers/net/tun.ko /lib/modules/$(uname -r)/kernel/drivers/net/
sudo depmod -a

# Try to load it
sudo modprobe tun



# Mock API App - Local Setup Guide

## Prerequisites
Ensure you have the following installed before proceeding:
- **Node.js** v18.20.6 (for compatibility with dependencies)
- **npm** (comes with Node.js)
- A code editor of your choice (e.g., VS Code, WebStorm)

## Installation Steps

1. **Clone the Repository**
   ```sh
   git clone https://github.com/ow-tech/mock-api-app.git
   ```

2. **Navigate to the Project Directory**
   ```sh
   cd mock-api-app
   ```

3. **Open in Your Preferred Code Editor**
   
   Example: If using VS Code, run:
   ```sh
   code .
   ```

4. **Install Dependencies**
   While in the root directory, open the terminal and run:
   ```sh
   npm install
   ```

## Running the Application

To start the development server, run:
```sh
npm start
```

The application should now be running at `http://localhost:3000/`.

## Technologies Used
- **React** v18.2.0
- **Tailwind CSS** v3.4.17
- **TypeScript**
- **Node.js** v18.20.6

## Application Features and Requirements

### Setup:
- Created using **Create React App** with TypeScript.
- Integrated **Tailwind CSS** for styling.

### Mock API:
- Uses **JSONPlaceholder** (https://jsonplaceholder.typicode.com/) for simulating server interactions.
- Implements endpoints for fetching, creating, updating, and deleting items.

### Component Structure:
- Displays a list of items.
- Each item contains a **title** and **description**.
- Includes a form for adding new items.

### Functionality:
- Fetches and displays item lists from the mock API.
- Supports adding new items and updating the UI accordingly.
- Allows users to delete items.
- Implements basic error handling for API calls.
- - Editing existing item titles or descriptions.
- sorting for the item list.

### Styling:
- Uses **Tailwind CSS** for styling components.
- Ensures a **responsive design** for both desktop and mobile devices.

### Deployment:
- The application is deployed on **Vercel**
- Deployed Application URL: **[https://mock-api-app-git-develop-ow-techs-projects.vercel.app]**



## Additional Notes
- If you encounter any issues, ensure you have the correct Node.js version installed.
- Tailwind CSS version 3.4.17 is used for stability.
- Modify the `package.json` scripts if needed for custom configurations.

Enjoy developing! 🚀

