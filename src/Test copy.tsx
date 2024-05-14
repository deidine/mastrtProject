import React from "react";
import { useForm } from "react-hook-form";

const GeneratedForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "all" });

  const onSubmit = (data: any) => {
    console.log(getValues());
    console.log(data);

    console.log(errors);
  };

  return (
    <aside className="relative w-full">
      <div className="fixed z-10 inset-x-0 w-full h-full bg-white px-4 border-l xl:inset-x-[unset] xl:block xl:max-w-[19rem] xl:top-auto xl:px-0 hidden">
        <div className="h-full overflow-y-auto pb-32 text-gray-400 text-sm p-8 space-y-4">
          <div dir="ltr" data-orientation="horizontal" className="w-full">
            <div
              role="tablist"
              aria-orientation="horizontal"
              className="inline-flex h-10 items-center justify-center p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 w-full rounded-lg text-sm bg-zinc-50"
              data-orientation="horizontal"
            >
              <button
                type="button"
                role="tab"
                aria-selected="true"
                aria-controls="radix-:Rf7qja:-content-light"
                data-state="active"
                id="radix-:Rf7qja:-trigger-light"
                className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50 w-full rounded-lg gap-x-2 data-[state=active]:border data-[state=active]:text-zinc-700"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-sun w-4 h-4"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
                Light
              </button>
              <button
                type="button"
                role="tab"
                aria-selected="false"
                aria-controls="radix-:Rf7qja:-content-dark"
                data-state="inactive"
                id="radix-:Rf7qja:-trigger-dark"
                className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50 w-full rounded-lg gap-x-2 data-[state=active]:border data-[state=active]:text-zinc-700"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-moon w-4 h-4"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
                Dark
              </button>
            </div>
            <div className="mt-6">
              <div
                data-state="active"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:Rf7qja:-trigger-light"
                id="radix-:Rf7qja:-content-light"
                className="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-x-2">
                    <svg
                      className="w-5 h-5 text-zinc-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_339_477)">
                        <path
                          d="M1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333C11.3807 18.3333 12.5 17.2141 12.5 15.8333V15.4167C12.5 15.0297 12.5 14.8361 12.5214 14.6737C12.6691 13.5519 13.5519 12.6691 14.6737 12.5214C14.8361 12.5 15.0297 12.5 15.4167 12.5H15.8333C17.2141 12.5 18.3333 11.3807 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M5.83334 10.8333C6.29358 10.8333 6.66667 10.4602 6.66667 10C6.66667 9.53977 6.29358 9.16667 5.83334 9.16667C5.3731 9.16667 5.00001 9.53977 5.00001 10C5.00001 10.4602 5.3731 10.8333 5.83334 10.8333Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M13.3333 7.50001C13.7936 7.50001 14.1667 7.12691 14.1667 6.66667C14.1667 6.20643 13.7936 5.83334 13.3333 5.83334C12.8731 5.83334 12.5 6.20643 12.5 6.66667C12.5 7.12691 12.8731 7.50001 13.3333 7.50001Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M8.33334 6.66667C8.79358 6.66667 9.16667 6.29358 9.16667 5.83334C9.16667 5.3731 8.79358 5.00001 8.33334 5.00001C7.8731 5.00001 7.50001 5.3731 7.50001 5.83334C7.50001 6.29358 7.8731 6.66667 8.33334 6.66667Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_339_477">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Button Background
                    </label>
                  </div>
                  <button
                    className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3"
                    type="button"
                    id="radix-:Rhdf7qja:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <div className="w-5 h-5 rounded-md border bg-orange-500"></div>
                    <span>bg-orange-500</span>
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-x-2">
                    <svg
                      className="w-5 h-5 text-zinc-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_319_368)">
                        <path
                          d="M14.7125 6.60833L10 1.89166L5.28751 6.60833C2.68334 9.2125 2.68334 13.4333 5.28751 16.0375C6.58751 17.3375 8.29584 17.9917 10 17.9917C11.7042 17.9917 13.4125 17.3417 14.7125 16.0375C17.3167 13.4333 17.3167 9.2125 14.7125 6.60833V6.60833ZM10 16.3208C8.66251 16.3208 7.40834 15.8 6.46667 14.8542C5.52084 13.9125 5.00001 12.6583 5.00001 11.3208C5.00001 9.98333 5.52084 8.72916 6.46667 7.78333L10 4.25V16.3208Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_319_368">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Button Color
                    </label>
                  </div>
                  <button
                    className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3"
                    type="button"
                    id="radix-:Ridf7qja:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <div className="w-5 h-5 rounded-md border bg-zinc-50"></div>
                    <span>text-zinc-50</span>
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-x-2">
                    <svg
                      className="w-5 h-5 text-zinc-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1875 2.1875H2.8125C2.4668 2.1875 2.1875 2.4668 2.1875 2.8125V17.1875C2.1875 17.5332 2.4668 17.8125 2.8125 17.8125H17.1875C17.5332 17.8125 17.8125 17.5332 17.8125 17.1875V2.8125C17.8125 2.4668 17.5332 2.1875 17.1875 2.1875ZM16.4062 16.4062H3.59375V3.59375H16.4062V16.4062Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Border
                    </label>
                  </div>
                  <div className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3 pr-0">
                    <button
                      className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 w-full justify-start rounded-lg gap-x-3 border-none shadow-none h-full px-0 bg-transparent focus-visible:ring-0 focus-visible:bg-transparent focus-visible:ring-offset-0"
                      type="button"
                      id="radix-:R1jdf7qja:"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                    >
                      <div className="w-5 h-5 rounded-md border bg-zinc-200"></div>
                      <span>border-zinc-200</span>
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-x-2">
                    <svg
                      className="w-5 h-5 text-zinc-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_339_477)">
                        <path
                          d="M1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333C11.3807 18.3333 12.5 17.2141 12.5 15.8333V15.4167C12.5 15.0297 12.5 14.8361 12.5214 14.6737C12.6691 13.5519 13.5519 12.6691 14.6737 12.5214C14.8361 12.5 15.0297 12.5 15.4167 12.5H15.8333C17.2141 12.5 18.3333 11.3807 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M5.83334 10.8333C6.29358 10.8333 6.66667 10.4602 6.66667 10C6.66667 9.53977 6.29358 9.16667 5.83334 9.16667C5.3731 9.16667 5.00001 9.53977 5.00001 10C5.00001 10.4602 5.3731 10.8333 5.83334 10.8333Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M13.3333 7.50001C13.7936 7.50001 14.1667 7.12691 14.1667 6.66667C14.1667 6.20643 13.7936 5.83334 13.3333 5.83334C12.8731 5.83334 12.5 6.20643 12.5 6.66667C12.5 7.12691 12.8731 7.50001 13.3333 7.50001Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M8.33334 6.66667C8.79358 6.66667 9.16667 6.29358 9.16667 5.83334C9.16667 5.3731 8.79358 5.00001 8.33334 5.00001C7.8731 5.00001 7.50001 5.3731 7.50001 5.83334C7.50001 6.29358 7.8731 6.66667 8.33334 6.66667Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_339_477">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Fields Background
                    </label>
                  </div>
                  <button
                    className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3"
                    type="button"
                    id="radix-:Rkdf7qja:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <div className="w-5 h-5 rounded-md border bg-white"></div>
                    <span>bg-white</span>
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-x-2">
                    <svg
                      className="w-5 h-5 text-zinc-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8333 11.6667L8.33333 9.16667M12.5086 2.91667V1.66667M15.7914 4.21722L16.6753 3.33334M15.7914 10.8333L16.6753 11.7172M9.17529 4.21722L8.29141 3.33334M17.092 7.50001H18.342M5.10947 17.3905L12.8072 9.69281C13.1372 9.3628 13.3022 9.19779 13.364 9.00752C13.4184 8.84015 13.4184 8.65986 13.364 8.49249C13.3022 8.30222 13.1372 8.13721 12.8072 7.8072L12.1928 7.19281C11.8628 6.8628 11.6978 6.69779 11.5075 6.63597C11.3401 6.58159 11.1599 6.58159 10.9925 6.63597C10.8022 6.69779 10.6372 6.8628 10.3072 7.19281L2.60947 14.8905C2.27946 15.2205 2.11445 15.3856 2.05263 15.5758C1.99825 15.7432 1.99825 15.9235 2.05263 16.0909C2.11445 16.2811 2.27946 16.4461 2.60947 16.7761L3.22385 17.3905C3.55387 17.7205 3.71887 17.8856 3.90915 17.9474C4.07652 18.0018 4.25681 18.0018 4.42418 17.9474C4.61445 17.8856 4.77946 17.7205 5.10947 17.3905Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Fields Effect
                    </label>
                  </div>
                  <button
                    className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3"
                    type="button"
                    id="radix-:Rldf7qja:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <div className="w-6 h-6 rounded-md bg-zinc-50 border flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-zinc-400"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_382_625)">
                          <path
                            d="M10.2528 5.3878C10.5613 5.26785 10.7155 5.20787 10.7588 5.12307C10.7963 5.0496 10.7952 4.96235 10.7557 4.88989C10.7102 4.80625 10.5545 4.75034 10.243 4.63852L2.29813 1.78652C2.04328 1.69504 1.91586 1.6493 1.83256 1.67814C1.76013 1.70323 1.70321 1.76014 1.67813 1.83257C1.64928 1.91587 1.69502 2.0433 1.78651 2.29815L4.63848 10.243C4.7503 10.5545 4.80621 10.7102 4.88985 10.7558C4.96231 10.7952 5.04956 10.7963 5.12303 10.7588C5.20783 10.7155 5.26781 10.5613 5.38776 10.2528L6.68618 6.91405C6.70968 6.85362 6.72143 6.82341 6.73958 6.79797C6.75566 6.77542 6.77538 6.7557 6.79793 6.73962C6.82337 6.72147 6.85358 6.70972 6.91401 6.68622L10.2528 5.3878Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_382_625">
                            <rect
                              className="w-4 h-4 text-zinc-400"
                              fill="currentColor"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span>Hover</span>
                  </button>
                  <button
                    className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3"
                    type="button"
                    id="radix-:Rtdf7qja:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <div className="w-6 h-6 rounded-md bg-zinc-50 border flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-zinc-400"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_382_628)">
                          <path
                            d="M6.5 0.5L6.5005 2.031C7.38161 2.1424 8.20063 2.54372 8.82858 3.17176C9.45653 3.7998 9.85773 4.61888 9.969 5.5H11.5V6.5L9.969 6.5005C9.85763 7.38153 9.45638 8.2005 8.82844 8.82844C8.2005 9.45638 7.38153 9.85763 6.5005 9.969L6.5 11.5H5.5V9.969C4.61888 9.85773 3.7998 9.45653 3.17176 8.82858C2.54372 8.20063 2.1424 7.38161 2.031 6.5005L0.5 6.5V5.5H2.031C2.14229 4.6188 2.54357 3.79967 3.17162 3.17162C3.79967 2.54357 4.6188 2.14229 5.5 2.031V0.5H6.5ZM6 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6C3 6.79565 3.31607 7.55871 3.87868 8.12132C4.44129 8.68393 5.20435 9 6 9C6.79565 9 7.55871 8.68393 8.12132 8.12132C8.68393 7.55871 9 6.79565 9 6C9 5.20435 8.68393 4.44129 8.12132 3.87868C7.55871 3.31607 6.79565 3 6 3ZM6 5C6.26522 5 6.51957 5.10536 6.70711 5.29289C6.89464 5.48043 7 5.73478 7 6C7 6.26522 6.89464 6.51957 6.70711 6.70711C6.51957 6.89464 6.26522 7 6 7C5.73478 7 5.48043 6.89464 5.29289 6.70711C5.10536 6.51957 5 6.26522 5 6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5Z"
                            fill="currentColor"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_382_628">
                            <rect
                              className="w-4 h-4 text-zinc-400"
                              fill="currentColor"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span>Focus</span>
                  </button>
                </div>
              </div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:Rf7qja:-trigger-dark"
          
                
                id="radix-:Rf7qja:-content-dark"
                className="mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 space-y-4"
              ></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-x-2">
              <svg
                className="w-5 h-5 text-zinc-400"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7547 5.82662C11.9648 5.30418 11.0179 5 10 5C7.23857 5 5 7.23857 5 10C5 12.7614 7.23857 15 10 15C11.0222 15 11.9729 14.6932 12.7648 14.1667H10V13.3333H13.7268C14.1588 12.8507 14.4984 12.2837 14.7178 11.6599H10V10.8266H14.932C14.9767 10.5578 15 10.2816 15 10C15 9.72358 14.9776 9.45233 14.9344 9.18817H10V8.35483H14.723C14.5028 7.72241 14.1591 7.14785 13.7208 6.65995H10V5.82662H12.7547Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.3333 10C18.3333 5.39763 14.6023 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6023 5.39763 18.3333 10 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 10ZM10 16.6667C13.6819 16.6667 16.6667 13.6819 16.6667 10C16.6667 6.3181 13.6819 3.33333 10 3.33333C6.3181 3.33333 3.33334 6.3181 3.33334 10C3.33334 13.6819 6.3181 16.6667 10 16.6667Z"
                  fill="currentColor"
                ></path>
              </svg>
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Shadow
              </label>
            </div>
            <button
              className="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-3 w-full justify-start rounded-lg shadow-sm gap-x-3"
              type="button"
              id="radix-:Rhn7qja:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <div className="w-5 h-5 rounded-md bg-white border shadow-sm"></div>
              <span>shadow-sm</span>
            </button>
          </div>
          <div className="flex items-center gap-x-2">
            <svg
              className="w-5 h-5 text-zinc-400"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1875 2.1875H2.8125C2.4668 2.1875 2.1875 2.4668 2.1875 2.8125V17.1875C2.1875 17.5332 2.4668 17.8125 2.8125 17.8125H17.1875C17.5332 17.8125 17.8125 17.5332 17.8125 17.1875V2.8125C17.8125 2.4668 17.5332 2.1875 17.1875 2.1875ZM16.4062 16.4062H3.59375V3.59375H16.4062V16.4062ZM9.45312 7.14844H10.5469C10.6328 7.14844 10.7031 7.07813 10.7031 6.99219V5.89844C10.7031 5.8125 10.6328 5.74219 10.5469 5.74219H9.45312C9.36719 5.74219 9.29688 5.8125 9.29688 5.89844V6.99219C9.29688 7.07813 9.36719 7.14844 9.45312 7.14844ZM5.89844 10.7031H6.99219C7.07813 10.7031 7.14844 10.6328 7.14844 10.5469V9.45312C7.14844 9.36719 7.07813 9.29688 6.99219 9.29688H5.89844C5.8125 9.29688 5.74219 9.36719 5.74219 9.45312V10.5469C5.74219 10.6328 5.8125 10.7031 5.89844 10.7031ZM13.0078 10.7031H14.1016C14.1875 10.7031 14.2578 10.6328 14.2578 10.5469V9.45312C14.2578 9.36719 14.1875 9.29688 14.1016 9.29688H13.0078C12.9219 9.29688 12.8516 9.36719 12.8516 9.45312V10.5469C12.8516 10.6328 12.9219 10.7031 13.0078 10.7031ZM9.45312 10.7031H10.5469C10.6328 10.7031 10.7031 10.6328 10.7031 10.5469V9.45312C10.7031 9.36719 10.6328 9.29688 10.5469 9.29688H9.45312C9.36719 9.29688 9.29688 9.36719 9.29688 9.45312V10.5469C9.29688 10.6328 9.36719 10.7031 9.45312 10.7031ZM9.45312 14.2578H10.5469C10.6328 14.2578 10.7031 14.1875 10.7031 14.1016V13.0078C10.7031 12.9219 10.6328 12.8516 10.5469 12.8516H9.45312C9.36719 12.8516 9.29688 12.9219 9.29688 13.0078V14.1016C9.29688 14.1875 9.36719 14.2578 9.45312 14.2578Z"
                fill="currentColor"
              ></path>
            </svg>
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Padding
            </label>
          </div>
          <div className="flex gap-x-3">
            <button
              type="button"
              role="combobox"
              aria-controls="radix-:Rbn7qja:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex items-center border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300 w-full justify-start rounded-lg shadow-sm gap-x-3 h-9"
            >
              <div className="w-full text-left flex gap-x-3 items-center">
                <span className="inline-block pr-3 border-r text-sm font-medium text-zinc-700">
                  X
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down flex-none h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <button
              type="button"
              role="combobox"
              aria-controls="radix-:Rjn7qja:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex items-center border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300 w-full justify-start rounded-lg shadow-sm gap-x-3 h-9"
            >
              <div className="w-full text-left flex gap-x-3 items-center">
                <span className="inline-block pr-3 border-r text-sm font-medium text-zinc-700">
                  Y
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down flex-none h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-x-2">
              <svg
                className="w-5 h-5 text-zinc-400"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_338_452" fill="white">
                  <path d="M3 11C3 6.58172 6.58172 3 11 3H17V17H3V11Z"></path>
                </mask>
                <path
                  d="M1.5 10.5C1.5 5.25329 5.75329 1 11 1H17V5H11C7.41015 5 4.5 7.68629 4.5 11L1.5 10.5ZM17 17H3H17ZM1.5 17V10.5C1.5 5.25329 5.75329 1 11 1V5C7.41015 5 4.5 7.68629 4.5 11V17H1.5ZM17 3V17V3Z"
                  fill="currentColor"
                  mask="url(#path-1-inside-1_338_452)"
                ></path>
              </svg>
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Radius
              </label>
            </div>
            <button
              type="button"
              role="combobox"
              aria-controls="radix-:Rkn7qja:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              className="flex items-center border border-zinc-200 bg-white px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300 w-full justify-start rounded-lg shadow-sm gap-x-3 h-9"
            >
              <div className="w-full text-left">
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-down flex-none h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default GeneratedForm;
