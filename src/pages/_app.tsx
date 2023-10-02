import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { MainLayout } from "@/components/layouts/main";
import { Provider } from "react-redux";
import { globalStore } from "@/stores/global";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<MainLayout>
			<Provider store={globalStore}>
				<Component {...pageProps} />
			</Provider>
		</MainLayout>
	);
};

export default api.withTRPC(MyApp);
