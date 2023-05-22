
import { apiRequest } from "./Ajax";

export async function getNoticeById(noticeId) {
  const { data: response } = await apiRequest.get(`api/notices/notice/${noticeId}`);
  return response;
}

export async function addNoticeToFavorite(noticeId, userId) {
  const { data: response } = await apiRequest.patch(`/api/notices/favourite/${noticeId}`, {
    userId
  });
  return response;
}

export async function removeNoticeFromFavorite(noticeId, userId) {
  const { data: response } = await apiRequest.delete(`/api/notices/favourite/${noticeId}`, {
    userId
  });
  return response;
}