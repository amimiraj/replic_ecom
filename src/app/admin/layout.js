import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export default function AdminLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>

        <>

          {/* -----------------------------------------------Sidebar----------------------------------------- */}
          <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="flex h-screen">
              <ul className="menu bg-base-200 w-56 rounded-box">
                <li className="border-b border-dark"><a>Dashboard</a></li>
                <hr />

                <li>
                  <details>
                    <summary>
                      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                      </svg>
                      Products</summary>
                    <ul>
                      <li><a>Product add</a></li>
                      <li><a>Product list</a></li>
                    </ul>
                  </details>
                </li>


                <li>
                  <details>
                    <summary>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                      Orders</summary>
                    <ul>
                      <li><a>Order add</a></li>
                      <li><a>Order list</a></li>
                    </ul>
                  </details>
                </li>

                <li >
                  <details >
                    <summary>
                      <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                      </svg>
                      Users</summary>
                    <ul>
                      <li><a>User add</a></li>
                      <li><a>User list</a></li>
                    </ul>
                  </details>
                </li>

                <li><a>
                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                  </svg>
                  Sign out
                </a></li>
              </ul>
            </div>
          </aside>
          {/* -----------------------------------------------Sidebar----------------------------------------- */}



          <div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

              {/* -----------------------------------------------Contents----------------------------------------- */}
              {children}

            </div>
          </div>

        </>


      </body>
    </html>
  );
}
