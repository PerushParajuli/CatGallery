const DarkToggle = () => {
    return (
        <>
            <div class="flex justify-start items-center gap-x-2">
                <span class="text-sm dark:text-gray-400">Light</span>
                <div>
                    {/* <!-- Whenever we click on the label the checkbox toggles --> */}
                    <input type="checkbox" id="toggle" class="hidden" />
                    <label for="toggle">
                        <div class="w-9 h-5 bg-slate-400 rounded-full p-1 flex items-center">
                            <div class="toggle-dot w-4 h-4 bg-white shadow-slate-400 shadow-sm rounded-full transform duration-500 ease-in-out"></div>
                        </div>
                    </label>
                </div>
                <span class="text-sm dark:text-gray-100">Dark</span>
            </div>
        </>
    );
};

export default DarkToggle;
