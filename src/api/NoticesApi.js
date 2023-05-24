import axios from "axios";

export async function getNoticeById(noticeId) {
  const { data: {data: response} } = await axios.get(`api/notices/notice/${noticeId}`);
  return response;
}

export async function addNoticeToFavorite(noticeId) {
  const { data: {data: response} } = await axios.patch(`/api/notices/favourite/${noticeId}`);
  return response;
}

export async function removeNoticeFromFavorite(noticeId) {
  const { data: {data: response} } = await axios.delete(`/api/notices/favourite/${noticeId}`);
  return response;
}
