import { invoke } from "@tauri-apps/api/tauri";
import { ConfigType } from "./common";

export async function restartSidecar() {
  return invoke<void>("restart_sidecar");
}

export interface ClashInfo {
  status: string;
  controller?: { server?: string; secret?: string };
  message?: string;
}

export async function getClashInfo() {
  return invoke<ClashInfo | null>("get_clash_info");
}

export async function patchClashConfig(payload: Partial<ConfigType>) {
  return invoke<void>("patch_clash_config", { payload });
}

export async function importProfile(url: string) {
  return invoke<void>("import_profile", { url });
}

export async function updateProfile(index: number) {
  return invoke<void>("update_profile", { index });
}

export interface ProfileItem {
  name?: string;
  file?: string;
  mode?: string;
  url?: string;
  updated?: number;
  selected?: { name?: string; now?: string }[];
  extra?: {
    upload: number;
    download: number;
    total: number;
    expire: number;
  };
}

export interface ProfilesConfig {
  current?: number;
  items?: ProfileItem[];
}

export async function getProfiles() {
  return invoke<ProfilesConfig | null>("get_profiles");
}

export async function setProfiles(current: number, profile: ProfileItem) {
  return invoke<void>("set_profiles", { current, profile });
}

export async function putProfiles(current: number) {
  return invoke<void>("put_profiles", { current });
}

export async function setSysProxy(enable: boolean) {
  return invoke<void>("set_sys_proxy", { enable });
}

export interface VergeConfig {
  theme_mode?: "light" | "dark";
  enable_self_startup?: boolean;
  enable_system_proxy?: boolean;
}

export async function getVergeConfig() {
  return invoke<VergeConfig>("get_verge_config");
}

export async function patchVergeConfig(payload: VergeConfig) {
  return invoke<void>("patch_verge_config", { payload });
}