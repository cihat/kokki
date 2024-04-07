import useAccountStore from "../stores/account";

export default {
  install: ({ config }) => {
    config.globalProperties.$auth = useAccountStore();
    const { fetchUser } = useAccountStore()

    fetchUser();
  },
};
